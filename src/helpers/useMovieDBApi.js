import axios from 'axios';
import { useState } from 'react';
import { API_BASE_URL } from 'moviesDB.constants';

let axiosInstance;
const apiKey = 'c623137074e7a670ab06fe364ca23c59';

const useMovieDBApi = () => {
  const [ data, setData ] = useState();

  const getAxiosInstance = () => {
    if(!axiosInstance) {
      axiosInstance = axios.create({
        baseURL: API_BASE_URL
      });
    }
    return axiosInstance;
  };

  const get = async (url, config) => {
    try {
      const response = await getAxiosInstance().get(url, config);
      setData(response.data);
    }
    catch (err) {
      throw err;
    }
  };

  return [ data, { get }]
};

export default useMovieDBApi;
