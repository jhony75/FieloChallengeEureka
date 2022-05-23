import axios from 'axios';

const baseURL = 'https://challenge-fielo.herokuapp.com';
let token = '';

const auth = () =>
  axios({
    method: 'post',
    url: `${baseURL}/auth`,
    headers: {
      'x-app-id':
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
    },
  }).then((resp) => {
    token = resp.data.token;
    console.log(token);
  });

const users = () =>
  axios({
    method: 'get',
    url: `${baseURL}/users`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

const userById = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/users/${id}`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

const userActivities = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/users/${id}/activities`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

const programs = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/programs/${id}`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

const programLevels = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/programs/${id}/levels`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

const levels = (id) =>
  axios({
    method: 'get',
    url: `${baseURL}/levels/${id}`,
    headers: {
      'x-access-token': token,
    },
  }).then((resp) => {
    console.table(resp.data);
  });

function Auth() {
  return (
    <button
      type="button"
      onClick={() => auth()}
      aria-label="label"
      label="button"
    >
      Auth
    </button>
  );
}

function Users() {
  return (
    <button
      type="button"
      onClick={() => users()}
      aria-label="label"
      label="button"
    >
      Users
    </button>
  );
}

function UserById() {
  return (
    <button
      type="button"
      onClick={() => userById('a3276e5b-d846-435c-8a86-feb6189374b4')}
      aria-label="label"
      label="button"
    >
      User by id
    </button>
  );
}

function UserActivities() {
  return (
    <button
      type="button"
      onClick={() => userActivities('a3276e5b-d846-435c-8a86-feb6189374b4')}
      aria-label="label"
      label="button"
    >
      User Activities
    </button>
  );
}

function Programs() {
  return (
    <button
      type="button"
      onClick={() => programs('86d5780f-38e2-4926-b4fe-518c5fd36b03')}
      aria-label="label"
      label="button"
    >
      Programs
    </button>
  );
}

function ProgramsLevels() {
  return (
    <button
      type="button"
      onClick={() => programLevels('86d5780f-38e2-4926-b4fe-518c5fd36b03')}
      aria-label="label"
      label="button"
    >
      Programs Levels
    </button>
  );
}

function Levels() {
  return (
    <button
      type="button"
      onClick={() => levels('620be362-27a8-4531-8694-f314b03c169g')}
      aria-label="label"
      label="button"
    >
      Levels
    </button>
  );
}

export {
  Auth,
  Users,
  UserById,
  UserActivities,
  Programs,
  ProgramsLevels,
  Levels,
};
