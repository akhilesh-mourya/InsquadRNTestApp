// @flow

import { set, isEmpty } from 'lodash';
// import { API } from '@env';
import { TOKEN } from '../constants/constants';

export type APIRequestProps = {
  endPoint: string;
  method: string;
  params?: any;
};

export default async function App_Service({ endPoint, method, params }: APIRequestProps) {
  const headers = {};
  const url =  endPoint;

  set(headers, 'Accept', 'application/json');
  set(headers, 'Content-Type', 'application/json');
  set(headers, 'Authorization', `Bearer ${TOKEN}`);

  const reqBody = {
    method,
    headers,
  };

  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params);
  }

  return fetch(url, reqBody)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0 && method === 'POST') {
        return {
          success: false,
          error: { message: `${data[0].field} ${data[0].message}` },
        };
      }
      return {
        success: true,
        data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        error,
      };
    });
}
