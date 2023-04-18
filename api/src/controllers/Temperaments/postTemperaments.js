const { Temperaments, Dog } = require('../../db');
const { getApiData, getDbData } = require('../Dogs/saveApiData');

const postTemp = async (id, name) => {
    const allApiTemps = await getApiData();
    const allDbTemps = await getDbData();
    const allTemps = allApiTemps.concat(allDbTemps);

    const id = allTemps.length +1;

    if(!name) throw new Error('Name required.');
    const validate = allTemps.find((a) => a.name === name);
    if(validate) throw new Error('Temperament already exists');
    if(!validate){
        const newTemp = await Temperaments.create({
            id: id,
            name
        })
    }
}