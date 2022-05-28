import axios from 'axios';

const baseURL = 'https://challenge-fielo.herokuapp.com';
let token = '';

// TODO: Update the error handling to run auth() in case of a 401 error.
// REFACTOR: Create an Axios instance to avoid code replication.

const auth = () =>
  axios({
    method: 'post',
    url: `${baseURL}/auth`,
    headers: {
      'x-app-id':
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
    },
  })
    .then((resp) => {
      token = resp.data.token;
      console.log(token);
    })
    .catch((error) => console.error(error));

const users = () =>
  axios({
    method: 'get',
    url: `${baseURL}/users`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

const userById = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/users/${id}`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

const userActivities = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/users/${id}/activities`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

const programs = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/programs/${id}`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

const programLevels = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/programs/${id}/levels`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

const levels = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/levels/${id}`,
    headers: {
      'x-access-token': token,
    },
  })
    .then((resp) => {
      console.table(resp.data);
    })
    .catch((error) => console.error(error));

export {
  auth,
  users,
  userById,
  userActivities,
  programs,
  programLevels,
  levels,
};
