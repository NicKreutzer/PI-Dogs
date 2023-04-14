
const { Dog, Temperaments } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData.js');

const getDogsRaza = async(id) => {
  try {
    const allDogsApi = await getApiData();
    //console.log(allDogsApi);
    const res = allDogsApi.filter((a) => a.id == id);
    console.log(res);
    if(res.length){
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
//! Promise.
/*const getDogsRaza = (id) => {
  return getApiData()
    .then((allDogsApi) => {
      const res = allDogsApi.filter((a) => a.id == id);
      console.log(res);
      if (res.length) {
        return res[0];
      } else {
        return getDbData()
          .then((allDogsDb) => {
            const res = allDogsDb.find((a) => a.id === id);
            return res;
          })
      }
    })
    .catch((error) => {
      return { error: error.message };
    });
};*/
module.exports = { getDogsRaza };