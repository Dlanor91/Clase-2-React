//una promesa recibe un callback, la promesa le pasa al callback dos funciones resolve, y reject
//el callback en caso de éxito llama a la función resolve, y en caso de error llama a la función reject
const callback = (resolve, reject) => {
  //aqui estas variables no son palabra reservadas
  try {
    resolve("Salio todo bien");
  } catch (error) {
    reject(error);
  }
};
const promesa = new Promise(callback); //aqui creo una promesa que es una clase

// para consumir una promesa se usa la función then la cual se invoca cuando la promesa terminó ya sea que se resolvió o rechazó
// then a su vez recibe una función que se ejecuta en caso de éxito, y opcionalmente una segunda función en caso error
promesa.then(
  //aqui antes de cada coma van los dos parametros o sea el resolve y reject
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

//una mejor manera es usando then, con una función y ademas  catch ( en realidad catch es como hacer .then(null, errorHandler) )
promesa
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
