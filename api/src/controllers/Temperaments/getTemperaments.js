
const { Temperaments } = require('../../db');

const getTemperaments = async () => {
    try {
        const allTemps = await Temperaments.findAll();
        console.log(allTemps);
        return allTemps;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getTemperaments };