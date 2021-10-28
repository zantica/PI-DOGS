const router = require('express').Router();
const axios = require('axios')
const { Dog, Temperament} = require('../db')
const { API_KEY } = process.env


// const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Rutas 
// router.use('/dogs', dogsRouter);
// router.use('/temperaments', temperamentRouter);

//---------------LOGICA-RUTAS---------------\\
const getApiInfo = async () => {
    let getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

    const apiInfo = await getApi.data.map(response => {
        return {
                    id: response.id,
                    name: response.name,
                    weight: response.weight,
                    height: response.height,
                    life_span: response.life_span
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
//----------------------------------------------\\


//-----------------RUTAS /DOGS-------------------\\

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

router.post('/dogs', async (req, res, next) => {
    const { name, weight, height, life_span } =  req.body

    try {
        const newDog = await Dog.create({
            name,
            weight,
            height,
            life_span
        });
        res.json(newDog)
        // console.log(newDog.toJSON()) 
    } 
    catch (err) {
        next(err)
    }
});
//----------------------------------------------\\


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
        const tempsToDataBase = [...tempsToFilter];

        tempsToDataBase.forEach(el => {
            Temperament.findOrCreate({
                where: {name: el}
            })
        })

        const allTemperaments = await Temperament.findAll()
        res.send(allTemperaments)
    }
    catch (err) {
        next(err)
    }
    
});
//----------------------------------------------\\

module.exports = router;
