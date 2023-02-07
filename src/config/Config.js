class Config {
    static instance;
  
    constructor(){
      if(this.instance){
        return this.instance;
      }  
      this.setConfig();
      this.instance = this;
    }

    setConfig(){       
        this.BASE_URL = process.env.REACT_APP_BASE_URL;
        this.MS_PATH = process.env.REACT_APP_MS_PATH;
        this.BASE_URL_API = process.env.REACT_APP_BASE_URL_API;
        this.ENVIRONMENT = process.env.NODE_ENV;
        this.URL_SERVICE = 'https://mindicador.cl/';
    }
  
  }

  // eslint-disable-next-line import/no-anonymous-default-export
  export default new Config();