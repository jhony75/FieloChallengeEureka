let authToken;

const baseUrl = 'https://challenge-fielo.herokuapp.com';

const HEADERS = new Headers({
  'x-app-id':
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
});

const requestConfig = {
  method: 'post',
  headers: HEADERS,
};

const auth = async () => {
  fetch(`${baseUrl}/auth`, requestConfig)
    .then(function (response) {
      response.json().then(function (data) {
        console.table(data);
        console.log(`auth status: ${data.auth}`);
        authToken = data.token;
        console.log(`Token: ${authToken}`);
      });
    })
    .catch(function (err) {
      console.error('Failed retrieving information', err);
    });
};
