
const { getApiData, getDbData } = require('./saveApiData.js');

const getDogsName = async (name) => {
    if(!name) throw new Error('No dogs found');
    if(name.charAt(0) === name.charAt(0).toUpperCase()){
        //* Si el primer caracter es MAYUSCULA
        if(name.charAt(1) === name.charAt(1).toUpperCase()){
            //* Si el segundo tambien es MAYUSCULA
            name = name.toLowerCase()
            //* Lo paso todo a minuscula
            name = (name.charAt(0)).toUpperCase() + name.slice(1);
            //* Paso a MAYUSCULA el primer caracter
        }
    };
    if(name.charAt(0) === name.charAt(0).toLowerCase()){
        //* Si el primer caracter es minuscula
        name = (name.charAt(0)).toUpperCase() + name.slice(1);
        //* Paso a MAYUSCULA el primer caracter
    }
    const resApi = await getApiData();
    const resDb = await getDbData();
    const data = resApi.concat(resDb);
    if (data.length === 0) {
        throw new Error('No dogs found');
    }
    //console.log(data);
    const dog = data.filter((a) => a.name.toLowerCase() === name.toLowerCase());
    if (dog.length) {
        return dog;
      } else {
        throw new Error('Dog not found.');
      }
};

module.exports = { getDogsName };