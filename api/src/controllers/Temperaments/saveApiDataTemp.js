
const axios = require('axios');
const { Temperaments } = require('../../db');
require("dotenv").config();

const getApiDataTemp = async () => {
    try {
        let temps = [];
        let apiDataTemps = await axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`);
        temps.push(apiDataTemps);
        temps = (await Promise.all(temps)).map((a) => a.data.map((res) => {
            return{
                id: res.id,
                name: res.temperament
            }
        }));
        let allTemps = [];
        temps.map((a) => {
            allTemps = allTemps.concat(a)
        });
        return allTemps;
    } catch (error) {
        return { error: error.message };
    }
};
const saveApiDataTemp = async () => {
    try {
        const allTemps = await getApiDataTemp();
        await Temperaments.bulkCreate(allTemps);
        return allTemps;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getApiDataTemp, saveApiDataTemp };