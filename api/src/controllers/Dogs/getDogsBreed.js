
const { getApiData, getDbData } = require('./saveApiData.js');

const getDogsBreed = async (breed) => {
    if(!breed) throw new Error('No breeds found');
    if(breed.charAt(0) === breed.charAt(0).toUpperCase()){
        //* Si el primer caracter es MAYUSCULA
        if(breed.charAt(1) === breed.charAt(1).toUpperCase()){
            //* Si el segundo tambien es MAYUSCULA
            breed = breed.toLowerCase()
            //* Lo paso todo a minuscula
            breed = (breed.charAt(0)).toUpperCase() + breed.slice(1);
            //* Paso a MAYUSCULA el primer caracter
        }
    };
    if(breed.charAt(0) === breed.charAt(0).toLowerCase()){
        //* Si el primer caracter es minuscula
        breed = (breed.charAt(0)).toUpperCase() + breed.slice(1);
        //* Paso a MAYUSCULA el primer caracter
    }
    const resApi = await getApiData();
    const resDb = await getDbData();
    const data = resApi.concat(resDb);
    if (data.length === 0) {
        throw new Error('No breeds found');
    }
    //console.log(data);
    const dog = data.filter((a) => a.breed_group && a.breed_group.toLowerCase() === breed.toLowerCase());
    console.log(dog)
    if (dog.length) {
        return dog;
      } else {
        throw new Error('Breed not found.');
      }
};

module.exports = { getDogsBreed };