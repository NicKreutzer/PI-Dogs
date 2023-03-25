const { Router } = require('express');
const { getDogs } = require('../controllers/getDogs');
const getDogsRaza = require('../controllers/getDogsRaza');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogsRaza);


module.exports = router;
