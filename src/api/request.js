import axios from 'axios';

const client = (() => {
  return axios.create({
    baseURL: 'https://challenge-fielo.herokuapp.com',
  });
})();

const request = async function (options, store) {
  const onSuccess = function (response) {
    const {
      data: { message },
    } = response;
    return message;
  };

  const onError = function (error) {
    return Promise.reject(error.response);
  };

  return client(options).then(onSuccess).catch(onError);
};

export { request };
