const axios = require('axios');
const { Dog, Temperaments } = require('../../db');
require("dotenv").config();

//! Info de la API.
const getApiData = async () => {
    try {
        let dogs = [];
        let apiData = await axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`);
        dogs.push(apiData);
        dogs = (await Promise.all(dogs)).map((a) => a.data.map((res) => {
            return{
                id: res.id,
                image: res.image.url,
                name: res.name,
                height: res.height.metric,
                weight: res.weight.metric,
                life_span: res.life_span,
                temperament: res.temperament,
                breed_group: res.breed_group
            };
        }));
        let allDogs = [];
        dogs.map((a) => {
            allDogs = allDogs.concat(a)
        });
        //console.log(allDogs);
        return allDogs;
    } catch (error) {
        return { error: error.message }
    }
};
//! Promise.
/*const getApiData = () => {
    return axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`)
      .then((response) => {
        const dogs = response.data.map((res) => {
          return {
            id: res.id,
            image: res.image.url,
            name: res.name,
            height: res.height.metric,
            weight: res.weight.metric,
            life_span: res.life_span,
            temperament: res.temperament,
            breed_group: res.breed_group,
          };
        });
        return dogs;
      })
      .catch((error) => {
        return { error: error.message };
      });
  };*/

//! Info de la DB.
const getDbData = async () => {
    const res = Dog.findAll({
        include:{
            model: Temperaments,
            attributes: ['name'],
        }
    })
    return res;
};

module.exports = {
    getApiData,
    getDbData,
};