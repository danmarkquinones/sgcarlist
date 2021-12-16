import axios from 'axios';
import {API_BASE_URL} from '@env';
import Kjur from '../helpers/jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Strict-Transport-Security': 'max-age=90',
  },
};

const POST = async (params, route) => {
  const token = Kjur.encode(params);

  const bearerToken = await AsyncStorage.getItem('bearerToken');

  axiosConfig.headers['Authorization'] = `Bearer ${bearerToken}`;

  return axios
    .post(`${API_BASE_URL}${route}`, {token: token}, axiosConfig)
    .then(res => {
      return res;
    })
    .catch(error => {
      return {error: error.message, status: 500};
    });
};

const GET = (route, params) => {
  const token = Kjur.encode(params ? params : {});

  return axios
    .get(`${API_BASE_URL}${route}?token=${token}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      return {error: error.message, status: 500};
    });
};

const UPDATE = async (route, params) => {
  const token = Kjur.encode(params);

  const bearerToken = await AsyncStorage.getItem('bearerToken');

  axiosConfig.headers['Authorization'] = `Bearer ${bearerToken}`;

  return axios
    .put(`${API_BASE_URL}${route}`, {token: token}, axiosConfig)
    .then(res => {
      console.log('DELET', res);
      return res;
    })
    .catch(error => {
      return {error: error.message, status: 500};
    });
};

export const api = {POST, GET, UPDATE};

export const logout = () => {
  AsyncStorage.setItem('isLoggedIn', '0');
  AsyncStorage.setItem('userDetails', '{}');
  AsyncStorage.setItem('bearerToken', '{}');
};
