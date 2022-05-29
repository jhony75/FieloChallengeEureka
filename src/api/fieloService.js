import { request } from './request';
import { authToken as token } from './authRequest';

class FieloService {
  static getAllUsers() {
    return request({
      url: '/users',
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }

  static getUserByID(id) {
    return request({
      url: `/users/${id}`,
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }

  static getUserActivities(id) {
    return request({
      url: `/users/${id}/activities`,
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }

  static getPrograms(id) {
    return request({
      url: `/programs/${id}`,
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }

  static getProgramLevels(id) {
    return request({
      url: `programs/${id}/levels`,
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }

  static getLevels(id) {
    return request({
      url: `programs/levels/${id}`,
      method: 'get',
      headers: {
        'x-access-token': token,
      },
    });
  }
}

export { FieloService };
