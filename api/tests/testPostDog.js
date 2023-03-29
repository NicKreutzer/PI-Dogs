const { postDogs } = require('../src/controllers/Dogs/postDogs');

(async () => {
  try {
    // Llamada a la función postDogs con parámetros válidos
    const result = await postDogs({
        name : "jorge",
        height: "2",
        weight: "15",
        life_span: "4",
        //temperamentID: id
  });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();