import types from './IndicatorsTypes';

const initialState = {
  indicators: [
    {
        codigo: "uf",
        nombre: "Unidad de fomento (UF)",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0
      },
      {
        codigo: "ivp",
        nombre: "Indice de valor promedio (IVP)",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0
      },
      {
        codigo: "dolar",
        nombre: "Dólar observado",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0
      },
      {
        codigo: "dolar_intercambio",
        nombre: "Dólar acuerdo",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0
      },
      {
        codigo: "euro",
        nombre: "Euro",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0
      },
      {
        codigo: "ipc",
        nombre: "Indice de Precios al Consumidor (IPC)",
        unidad_medida: "Porcentaje",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "utm",
        nombre: "Unidad Tributaria Mensual (UTM)",
        unidad_medida: "Pesos",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "imacec",
        nombre: "Imacec",
        unidad_medida: "Porcentaje",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "tpm",
        nombre: "Tasa Política Monetaria (TPM)",
        unidad_medida: "Porcentaje",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "libra_cobre",
        nombre: "Libra de Cobre",
        unidad_medida: "Dólar",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "tasa_desempleo",
        nombre: "Tasa de desempleo",
        unidad_medida: "Porcentaje",
        fecha: "",
        valor: 0,
      },
      {
        codigo: "bitcoin",
        nombre: "Bitcoin",
        unidad_medida: "Dólar",
        fecha: "",
        valor: 0,
      }
    ],
  isLoading:false,
  finishLoad:false
}

const IndicatorReducer = (state=initialState, action) =>{
  switch (action.type) {
    case types.GET_INDICATORS:
      return{
        ...state,
        indicators: action.payload
      }
    case types.LOADING:
      return{
        ...state,
        isLoading: action.payload
      }
    case types.FINISH_LOAD:
      return{
        ...state,
        isLoading:false,
        finishLoad:true
      }
    case 'RESET_STATE':
      return{
        ...initialState
      } 
    default:
      return state;
  }
}

export default IndicatorReducer;