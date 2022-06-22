// on importe le module express
const express = require('express');
// on importe mongoose
const mongoose = require('mongoose');
// on importe le package path
const path = require('path');
// on importe body parser qui qnqlyse les corps de requete entrant
const bodyParser = require('body-parser');
// On importe notre module router 
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
// Connection a la base de donnee mongoDB
mongoose.connect('mongodb+srv://kantandev:0000@cluster0.vtiyhuh.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB Atlas réussie !'))
  .catch(() => console.log('Connexion à MongoDB Atlas échouée !'));
// on cree l'application express
const app = express();
// middleware CORS 'cross origin resource sharing'
app.use((req, res, next) => {
  // accéder à notre API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Origin', '*');
  // ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // envoyer des requêtes avec les méthodes mentionnées
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// on analyse les corps de donnee entrant
app.use(bodyParser.json());

// on gere mutler
app.use('/images', express.static(path.join(__dirname, 'images')));
// on cree une route vers notre router
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
// On exporte notre application pour pouvoir s'en servir dans d'autre fichier 
module.exports = app;




// // on importe le module express
// const express = require('express');
// // on importe mongoose
// const mongoose = require('mongoose');
// // on cree l'application express
// const app = express();
// // On importe le model 
// const Thing = require('./models/Things');
// // Connection a la base de donnee mongoDB
// mongoose.connect('mongodb+srv://kantandev:0000@cluster0.vtiyhuh.mongodb.net/?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('Connexion à MongoDB Atlas réussie !'))
//   .catch(() => console.log('Connexion à MongoDB Atlas échouée !'));
// // On cree nos middlewares CRUD 'create read update delete'
// // Donne acces au corp de la requete 
// app.use(express.json());
// // middleware CORS 'cross origin resource sharing'
// app.use((req, res, next) => {
//   // accéder à notre API depuis n'importe quelle origine
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // ajouter les headers mentionnés aux requêtes envoyées vers notre API
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   // envoyer des requêtes avec les méthodes mentionnées
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });
// // route GET page accueil
// app.get('/api/stuff', (req, res, next) => {
//   Thing.find()
//     .then(things => res.status(200).json(things))                                                                          
//     .catch(error => res.status(400).json({ error }));
// });
// // route get pour un objet specifique 
// app.get('/api/stuff/:id', (req, res, next) => {
//   Thing.findOne({ _id: req.params.id })
//     .then(thing => res.status(200).json(thing))
//     .catch(error => res.status(404).json({ error }))
// });
// // Route POST
// app.post('/api/stuff', (req, res, next) => {
//   // on supprime id revoyer par le frontend car il renvois un id qui n'est pas le bon car mongodb le gere 
//   delete req.body._id
//   // on copie l'objet dans notre fichier Thing et on en cree une nouvelle instance 
//   const thing = new Thing({
//     ...req.body
//   });
//   // on enregistre dans la base de donnee 
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregiste !' }))
//     .catch(error => res.status(400).json({ error }));
// });
// // Route PUT 
// app.put('/api/stuff/:id', (req, res, next) => {
//   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet modifié !' }))
//     .catch(error => res.status(400).json({ error }));
// });
// // Route delete
// app.delete('/api/stuff/:id', (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// });
