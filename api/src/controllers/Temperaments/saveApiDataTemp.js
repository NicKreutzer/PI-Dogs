
const axios = require('axios');
const { Temperaments } = require('../../db');
require("dotenv").config();

const getApiDataTemp = async () => {
    try {
        const apiDataTemps = await axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`);
        const uniqueTemps = new Set(); 
        const allTemps = apiDataTemps.data.reduce((temperaments, res) => {
            const temperamentArray = res.temperament ? res.temperament.split(', ') : [];
            temperamentArray.forEach((temperament) => {
                const trimmedTemperament = temperament.trim();
                if (!uniqueTemps.has(trimmedTemperament)) { // agregar el temperamento al conjunto Set solo si no existe
                    uniqueTemps.add(trimmedTemperament);
                    temperaments.push({ name: trimmedTemperament });
                }
            });
            return temperaments;
        }, []);
        //console.log(allTemps);
        return allTemps;
    } catch (error) {
        return { error: error.message };
    }
};

const saveApiDataTemp = async () => {
    try {
        const allTemps = await getApiDataTemp();
        const uniqueTemps = new Set(allTemps.map((t) => t.name)); // crear un Set con los nombres de los temperamentos únicos
        const tempsToSave = Array.from(uniqueTemps).map((name) => ({ name })); // convertir el Set a un array de objetos
        await Temperaments.bulkCreate(tempsToSave);
        return tempsToSave;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getApiDataTemp, saveApiDataTemp };


// const axios = require('axios');
// const { Temperaments } = require('../../db');
// require("dotenv").config();

// const getApiDataTemp = async () => {
//     try {
//         let temps = [];
//         let apiDataTemps = await axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`);
//         temps.push(apiDataTemps);
//         temps = (await Promise.all(temps)).map((a) => a.data.map((res) => {
//             return{
//                 id: res.id,
//                 temperament: res.temperament
//             }
//         }));
//         let allTemps = [];
//         temps.map((a) => {
//             allTemps = allTemps.concat(a)
//         });
//         console.log(allTemps)
//         return allTemps;
//     } catch (error) {
//         return { error: error.message };
//     }
// };
// const saveApiDataTemp = async () => {
//     try {
//         const allTemps = await getApiDataTemp();
//         await Temperaments.bulkCreate(allTemps);
//         return allTemps;
//     } catch (error) {
//         return { error: error.message };
//     }
// };

// module.exports = { getApiDataTemp, saveApiDataTemp };