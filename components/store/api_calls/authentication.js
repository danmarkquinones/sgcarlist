import axios from "axios";
import {API_BASE_URL} from '@env';
import Kjur from '../helpers/jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const post = (params, route) => {
  const token = Kjur.encode(params);
  return axios
    .post(
      `${API_BASE_URL}${route}`,
      {token: token},
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
          'Strict-Transport-Security': 'max-age=90',
        },
      },
    )
    .then(res => {
      console.log("RES", res);
      return  res
    })
    .catch(error => {
      console.log(error);
      return {error: error.message, status: 500}
    });
};;

export const logout = () => {
  AsyncStorage.setItem('isLoggedIn' , '0')
  AsyncStorage.setItem('userDetails' , '{}')
  AsyncStorage.setItem('bearerToken' , '{}')
}
