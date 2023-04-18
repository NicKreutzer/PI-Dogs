
const { Temperaments, Dog } = require('../../db');
const { getApiData, getDbData } = require('./saveApiData');

const postDogs = async (image, name, height, weight, life_span, temperamentID = [1]) => {
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
            height: height,
            weight: weight,
            life_span: life_span,
        })
        for (let i = 0; i < temperamentID.length; i++) {
          const element = temperamentID[i];
          //console.log(element)
           const temp = await Temperaments.findOne({
                where: {
                    name : element
                }
            })
            await newBreed.addTemperament(temp)
        }
        return ('Dog successfully created')
    }
};
//! Promise.
// const postDogs = (image, name, height, weight, life_span, temperamentID = [1]) => {
//     return getApiData()
//       .then(allApiDogs => {
//         return getDbData()
//           .then(allDbDogs => {
//             const allDogs = allApiDogs.concat(allDbDogs);
//             const id = allDogs.length + 1;
//             if (!name || !height || !weight || !life_span || !temperamentID) throw new Error('Information not complete');
//             const validate = allDogs.find(a => a.name === name);
//             if (validate) throw new Error('Dog already exists');
//             if (!validate) {
//               return Dog.create({
//                 id: id,
//                 name: name.charAt(0).toUpperCase() + name.slice(1),
//                 image: image ? image : "https://www.zooplus.es/magazine/wp-content/uploads/2018/03/Como-educar-a-un-cachorro.jpeg",
//                 height,
//                 weight,
//                 life_span,
//               })
//               .then(newBreed => {
//                 return Temperaments.findByPk(temperamentID)
//                   .then(temp => {
//                     return newBreed.addTemperaments(temp)
//                       .then(() => 'Dog successfully created');
//                   });
//               });
//             }
//           });
//       })
//       .catch(error => {
//         return { error: error.message };
//       });
//   };


module.exports = { postDogs };