const callback = (resolve, reject) => {
  try {
    resolve("Salio todo bien");
  } catch (error) {
    reject(error);
  }
};
const promesa = new Promise(callback);
