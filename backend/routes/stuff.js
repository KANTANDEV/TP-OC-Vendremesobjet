// on importe le module express
const express = require('express');
// on importe multer
const multer = require('../middelware/multer-config');
// on cree notre router
const router = express.Router();
// on importe notre middelware
const auth = require('../middelware/auth');
// on importe nos controllers
const stuffCtrl = require('../controllers/stuff');
// on cree les routes de notre api qui se servent de nos controllers
router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
// on exporte notre router
module.exports = router;