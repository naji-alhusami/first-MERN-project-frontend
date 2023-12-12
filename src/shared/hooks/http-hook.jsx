import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    //  we use useCallback to avoid infinite loop so when the comp rerender the function never recreated
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAortCtrl = new AbortController(); // we are using this because the user maybe will send request for login or signup and then he will go back while the request is sending, so this aborted the request
      activeHttpRequests.current.push(httpAortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAortCtrl
        ); // this delete oue desired http request that we don't need

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);

        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);

        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // cleanup function for all the aborted signals
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
