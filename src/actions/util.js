import axios from 'axios';

export const api = getState => {
  const { server, accessToken } = getState().user;

  return axios.create({
    baseURL: `https://${server}/`,
    params: { access_token: accessToken },
    transformRequest: [
      data => JSON.stringify(data),
    ],
  });
};
