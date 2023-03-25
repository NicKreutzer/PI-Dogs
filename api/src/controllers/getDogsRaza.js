const axios = require("axios");
require("dotenv").config();

const getDogsRaza = async (req, res) => {
    const { id } = req.params;
  
    try {
        const { data } = await axios(`${process.env.URL_BASE}/${id}?api_key=${process.env.API_KEY}`);
        console.log(data);
        const obj = filterData(data);
        console.log(obj);
        res.status(200).json(obj);
    } catch (error) {
        res.status(400).json({ message:error })
    }
  };

  function filterData(data){
    const { weight, height, id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id } = data;
    const obj = {
      id,
      name,
      bred_for,
      breed_group,
      life_span,
      temperament: temperament.split(", "),
      origin,
      image: {
        url: `https://cdn.thedogapi.com/images/${reference_image_id}.jpg`
      },
      height: {
        imperial: height.imperial,
        metric: height.metric
      },
      weight: {
        imperial: weight.imperial,
        metric: weight.metric
      }
    };
    return obj;
  };

module.exports = getDogsRaza;