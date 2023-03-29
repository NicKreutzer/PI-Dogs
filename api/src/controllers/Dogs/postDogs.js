
const { Temperaments, Dog } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData');

const postDogs = async (image, name, height, weight, life_span, temperamentID) => {
    const allApiDogs = await getApiData();
    const allDbDogs = await getDbData();
    const allDogs = allApiDogs.concat(allDbDogs);
    const id = allDogs.length +1;
    if(!name || !height || !weight || !life_span || !temperamentID) throw new Error('Information not complete');

    const validate = allDogs.find((a) => a.name === name);
    if(validate) throw new Error('Dog already exists');
    if(!validate){
        const newBreed = await Dog.create({
            id: id,
            name: (name.charAt(0)).toUpperCase() + name.slice(1),
            image: image ? image : "https://www.zooplus.es/magazine/wp-content/uploads/2018/03/Como-educar-a-un-cachorro.jpeg",
            height,
            weight,
            life_span,
            //breed_group
        })
        const temp = await Temperaments.findOne({
            where: {
                id: temperamentID
            }
        })
        await newBreed.addTemperaments(temp)
        return ('Dog successfully created')
    }
};

module.exports = { postDogs };