const allowedKeys = [
    "uf",
    "ivp",
    "dolar",
    "dolar_intercambio",
    "euro",
    "ipc",
    "utm",
    "imacec",
    "tpm",
    "libra_cobre",
    "tasa_desempleo",
    "bitcoin"
  ];

const filterIndicatorsByKey = (object) => {
    const arrayIndicators = Object.entries(object);
    const processIndicators = arrayIndicators.map(([key, value]) => {
      if(allowedKeys.includes(key)){
        return value
      }
      return [];
    });
    return processIndicators.flat();
}

 

  

  export default filterIndicatorsByKey;