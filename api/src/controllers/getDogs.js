const axios = require("axios");
require("dotenv").config();

const getDogs = async (req, res) => {
    const {name} = req.params;
    try {
        const { data } = await axios(`${process.env.URL_BASE}?api_key=${process.env.API_KEY}`);
        const obj = filterData(data);
        console.log(obj);
        res.status(200).json(obj);
    } catch (error) {
        res.status(400).json({ message:error })
    }
};

function filterData(data){
    const names = data.map(dog => dog.name);
    return {
      names
    }
};

module.exports = { getDogs };