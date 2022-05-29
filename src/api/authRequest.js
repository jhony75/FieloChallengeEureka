import axios from 'axios';

let authToken = '';

const auth = () =>
  axios({
    method: 'post',
    url: 'https://challenge-fielo.herokuapp.com/auth',
    headers: {
      'x-app-id':
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
    },
  })
    .then((resp) => {
      authToken = resp.data.token;
      console.log(authToken);
    })
    .catch((error) => console.error(error));

export { authToken, auth };
