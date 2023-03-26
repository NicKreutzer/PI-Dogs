
const { Dog } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData');

const getDogs = async () => {
    try {
        const allDogsApi = await getApiData();
        const allDogsDb = await getDbData();
        return allDogsApi.concat(allDogsDb);
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getDogs };