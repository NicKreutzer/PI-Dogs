const { Router } = require('express');
const { getDogs } = require('../controllers/Dog/getDogs');
const { getDogsName } = require('../controllers/Dog/getDogsName');
const { getDogsRaza } = require('../controllers/Dog/getDogsRaza');
const { postDogs } = require('../controllers/Dog/postDogs');
const { getTemperaments } = require('../controllers/Temperament/getTemperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', async (req, res) => {
    try {
        const allDogs = await getDogs();
        res.status(200).json(allDogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/dogs/id/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getDogsRaza(id);
        if(!result) throw new Error('No dog with that ID');
        else 
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message});
    }
});
router.get('/dogs/name', async (req, res) => {
    //* Para buscar en Thunder => parameter = name --- value = el nombre que querramos buscar.
    const { name } = req.query;
    try {
        const result = await getDogsName(name);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/temperaments', async (req, res) => {
    try {
      const allTemperaments = await getTemperaments();
      res.status(200).json(allTemperaments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.post('/dog', async (req, res) => {
    const { image, name, height, weight, life_span, temperamentID } = req.body;
    try {
      
      const result = await postDogs(image, name, height, weight, life_span, temperamentID);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });


module.exports = router;
