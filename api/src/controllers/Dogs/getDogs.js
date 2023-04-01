
const { Dog } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData');

const getDogs = async () => {
    try {
        const allDogsDb = await getDbData();
        const allDogsApi = await getApiData();
        //const allDogs = allDogsApi.concat(allDogsDb);
        //! Para devolver solo los nombres de los perros cada uno como un objeto.
        // const names = allDogs.map(dog => ({ name: dog.name }));
        // return names;
        //! Para devolver todos los nombres en un solo objeto (tipo lista).
        // const dbNames = allDogsDb.map(dog => dog.name);
        // const apiNames = allDogsApi.map(dog => dog.name);
        // return { names: dbNames.concat(apiNames) };
        //! Para devolver todos los perros con la informacion completa.
        return allDogsApi.concat(allDogsDb);
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getDogs };