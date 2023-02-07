/* eslint-disable import/no-anonymous-default-export */
import Api from '../utils/Api';
import Config from '../config/Config';

class IndicatorService {
  constructor() {
    this.url = `${Config.URL_SERVICE}`;
    this.api = new Api({ url: this.url });
    this.api.createEntity({ name: 'api' });
  }

  getIndicators() {
    // const config = { headers: {"Content-Type": "application/json", Authorization:`Bearer ${token}`}}
    return this.api.endpoints.api
      .get()
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default new IndicatorService();
