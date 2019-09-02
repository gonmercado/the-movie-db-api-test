import React, { useContext } from 'react';

export const apiConfigurationContext = React.createContext();

const useApiConfigurationContext = () => {
  const apiContext = useContext(apiConfigurationContext);

  return apiContext;
};

export default useApiConfigurationContext;
