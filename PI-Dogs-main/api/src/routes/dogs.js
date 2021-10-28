// require('dotenv').config();
// const { Router, response } = require('express');
// const axios = require('axios')
// const router = Router();
// const { Dog } = require('../db')
// const API_KEY = process.env;

// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// router.get('/', async (req, res, next) => {
//     const { name } = req.query;
//     try {
//         if (!name || name === '') {
//             let getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//             let infoApi = await getApi.data.map(response => {
//                 return {
//                     name: response.name,
//                     weight: response.weight,
//                     height: response.height,
//                     life_span: response.life_span,

//                 }
//             });  
        
//         return res.json(infoApi);  
//         }

//     } catch (err) {
//         next(err)
//     }
// });

// router.get('/:name', async (req, res, next) => {
//     const { name } = req.query;
//     const dog =  await Dog.findAll({
//         where: {
//             name: name
//         }
//     });

//     res.json(dog.length ? dog : 'Dog not found')
// })

// // app.get("/:id", async function (req, res) {

// //     })

// router.post('/', async (req, res, next) => {
//     const { name, weight, height, life_span } =  req.body

//     try {
//         const newDog = await Dog.create({
//             name,
//             weight,
//             height,
//             life_span
//         });
//         res.json(newDog)
//         // console.log(newDog.toJSON()) 
//     } 
//     catch (err) {
//         next(err)
//     }
    
// })
// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


// module.exports = router;