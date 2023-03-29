
const { Dog, Temperaments } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData.js');

const getDogsRaza = async(id) => {
  try {
    const allDogsApi = await getApiData();
    //console.log(allDogsApi);
    const res = allDogsApi.filter((a) => a.id == id);
    if(res.length){
      console.log(res);
      return res[0]
    } else {
      const allDogsDb = await getDbData();
      const res = allDogsDb.find((a) => a.id === id);
      return res;
    }
  } catch (error) {
    return ({error: error.message});
  }
};
module.exports = { getDogsRaza };