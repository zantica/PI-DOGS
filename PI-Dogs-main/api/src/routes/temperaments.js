// require('dotenv').config()
// const { Router } = require('express');
// const axios = require('axios');
// const router = Router();
// const { Temperament } = require('../db')

// // /temperaments me deberia devolver los temperamentos de los perros
// router.get('/', async (req, res, next) => {
//     try {
//         const temperaments = await Temperament.findAll();
//         const temperamentsToSend = [];
//         for (const temperament of temperaments) {
//             temperamentsToSend.push(temperamentToSend(temperament));
//         }
//         res.json(temperamentsToSend);
//     } catch (error) {
//         // res.status(500).json({error: error.message});
//         // return console.log('Error: ', error);
//         next(error);
//     }
// });

// // Recorrer todas las razas y guardar los temperamentos
// // que no se repitan en la base de datos. 
// // Luego de eso, podemos usarlos desde la bbdd

// module.exports = router;
