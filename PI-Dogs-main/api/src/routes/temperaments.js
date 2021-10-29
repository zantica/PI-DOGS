const { Router } = require('express');
const axios = require('axios')
const { Dog, Temperament } = require('../db')
const { API_KEY } = process.env
const router = Router()


//---------------RUTA /TEMPERAMENT---------------\\

router.get('/temperament', async (req, res, next) => {
    try {
        const getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const tempInfo = await getApi.data.map(response => {
            return {
                temperament: response.temperament
            }
        });
        let temp = tempInfo.map(t => t.temperament)
        let temp2 = temp.join(", ").split(", ");

        const tempsToFilter = new Set(temp2) //SET me devuelve los valores unicos
        const tempsToDataBase = [...tempsToFilter].sort(); //Los ordeno alfabeticamente

        tempsToDataBase.map(el => {
            Temperament.findOrCreate({
                where: { name: el }
            });
        });

        const allTemperaments = await Temperament.findAll();
        res.send(allTemperaments);
    }
    catch (err) {
        next(err);
    }
    
});
//----------------------------------------------\\


module.exports = router;