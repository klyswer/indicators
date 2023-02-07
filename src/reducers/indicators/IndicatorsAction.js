import types from "./IndicatorsTypes";
import IndicatorService from "../../services/IndicatorService";
import filterIndicatorsByKey from "../../config/toArrayMapper";

export const getIndicatorsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.LOADING, payload: true });
      const getIndicators = await IndicatorService.getIndicators();
      console.log(typeof getIndicators === 'object')
      
      if (typeof getIndicators === 'object') {
        const indicators = filterIndicatorsByKey(getIndicators);
        dispatch({ type: types.GET_INDICATORS, payload: indicators })
      }else{
        throw new Error('Algo salio mal en la respuesta del servicio.');
      }
      

    } catch (error) {
      const {response}=error;
      if(response.status===401){
        sessionStorage.clear();
        dispatch({ type: types.FINISH_LOAD });
      }
    }
  };
};

// Action creators

export const filtrarDatosVentasAction = (filtro) => {
  return dispatch => {

  }
}

