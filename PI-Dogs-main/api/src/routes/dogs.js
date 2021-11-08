const { Router } = require('express');
const axios = require('axios')
const router = Router()
const { Dog, Temperament} = require('../db')
const { API_KEY } = process.env


//---------------LOGICA-RUTAS---------------\\
const getApiInfo = async () => {
    let getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

    const apiInfo = await getApi.data.map(response => {
        return {
                    id: response.id,
                    name: response.name,
                    weight_min: parseInt(response.weight.metric.slice(0, 2).trim()),
                    weight_max: parseInt(response.weight.metric.slice(4).trim()),
                    height_min: parseInt(response.height.metric.slice(0, 2).trim()),
                    height_max: parseInt(response.height.metric.slice(4).trim()),
                    life_span: response.life_span,
                    image: response.image.url,
                    temperament: response.temperament
        }
    });
    return apiInfo;
};

const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
};

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
};
// //----------------------------------------------\\


// //-----------------RUTAS /DOGS-------------------\\

router.get('/dogs', async (req, res, next) => {
    try {
        const { name } = req.query;
        const allDogs = await getAllDogs()
            if (name) {
                const dogsName = await allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
                dogsName.length ?
                res.status(200).send(dogsName) :
                res.status(404).send('Dog not found')
            } else {
                res.status(200).send(allDogs)
            }
    }
    catch (err) {
        next(err);
    }
});

router.get("/dogs/:id", async (req, res, next) => { 
    try {
        const { id } = req.params;
        const totalDogs = await getAllDogs();

        if (id) {
        const dogId = totalDogs.filter((f) => f.id == id);
        if (dogId.length > 0) return res.status(200).send(dogId);
        }
    else if (!id) return res.status(404).send("Dog not found");
    }
    catch (err) {
        next (err);
    }
});


router.post('/dogs', async function(req, res, next) {
    const {name, height_min, height_max, weight_min, weight_max, life_span, image, temperament, createdInDB} = req.body
    const newDog = await Dog.create({
        name,
        life_span,
        image,
        weight_min,
        weight_max,
        height_min,
        height_max,
        createdInDB
      
    });
    temperament.map(async e => {
      const temperamentDB = await Temperament.findAll({
          where: {
              name : e
          },
          include: [Dog]
      })
      newDog.addTemperament(temperamentDB)
  })
    res.json(newDog)
  });
// //----------------------------------------------\\


module.exports = router;