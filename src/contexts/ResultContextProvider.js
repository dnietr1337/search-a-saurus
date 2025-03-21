import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google.serper.dev';

const myHeaders = new Headers();
myHeaders.append('X-API-KEY', process.env.REACT_APP_API_KEY);
myHeaders.append('Content-Type', 'application/json');

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ q: searchTerm }),
      redirect: 'follow',
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
