import axios from 'axios';
import { useState } from 'react';
import { API_BASE_URL } from 'moviesDB.constants';

let axiosInstance;
const apiKey = 'c623137074e7a670ab06fe364ca23c59';

const useMovieDBApi = () => {
  const [ data, setData ] = useState();
  const [ fetching, setFetching ] = useState();

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
      setFetching(true);
      const response = await getAxiosInstance().get(url, config);
      setData(response.data);
      setFetching(false);
    }
    catch (err) {
      setFetching(false);
      throw err;
    }
  };

  return [ data, { get }, fetching ]
};

export default useMovieDBApi;
