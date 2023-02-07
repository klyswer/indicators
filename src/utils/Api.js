import axios from 'axios';

class Api {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }

  /**
   * Crea y almacena entidad de endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    const name = entity.name.toLowerCase();
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  /**
   * Crea y almacena entidades de endpoints
   * @param {A entity Object} entity
   */

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Creación de manejadores de endpoints para realizar operaciones de CRUD
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    const endpoints = {};

    const resourceURL = `${this.url}${name}`;

    endpoints.getAll = (query = {}, config = {}) => {
      return axios.get(resourceURL, Object.assign({ params: query }, config));
    };

    endpoints.get = (config = {}) => {
      return axios.get(resourceURL, config);
    };

    endpoints.getId = ({ id }, config = {}) => {
      return axios.get(`${resourceURL}/${id}`, config);
    };

    endpoints.create = (toCreate, config = {}) => {
      return axios.post(resourceURL, toCreate, config);
    };

    endpoints.update = (id,toUpdate, config = {}) => {
      return axios.put(`${resourceURL}/${id}`, toUpdate, config);
    };

    endpoints.patch = ({ id }, toPatch, config = {}) => {
      return axios.patch(`${resourceURL}/${id}`, toPatch, config);
    };

    endpoints.delete = ({ id }, config = {}) => {
      return axios.delete(`${resourceURL}/${id}`, config);
    };

    return endpoints;
  }
}

export default Api;
