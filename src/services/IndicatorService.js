/* eslint-disable import/no-anonymous-default-export */
import Api from '../utils/Api';
import Config from '../config/Config';

class IndicatorService {
  constructor() {
    this.url = `${Config.URL_SERVICE}`;
    this.api = new Api({ url: this.url });
    this.api.createEntity({ name: 'proxy' });
  }

  getIndicators() {
    return this.api.endpoints.proxy
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
