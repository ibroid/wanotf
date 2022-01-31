const axios = require('axios');
module.exports = {
  findFromUrl : (url) => {
    return axios.get(url, {
      responseType: 'arraybuffer'
    }).then(response => {
        return {
          mimeType : response.headers['content-type'],
          attachment : response.data.toString('base64')
        }
      }
    );
  }
}