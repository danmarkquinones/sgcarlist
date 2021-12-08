import axios from "axios";
import {API_BASE_URL} from '@env';
import Kjur from '../helpers/jwt';

export const post = (params, route) => {
  const token = Kjur.encode(params);
  return axios
    .post(
      `${API_BASE_URL}${route}`,
      {token},
      {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
          'Strict-Transport-Security': 'max-age=90',
        },
      },
    )
    .then(res => res)
    .catch(error => ({error: error.message}));
};
