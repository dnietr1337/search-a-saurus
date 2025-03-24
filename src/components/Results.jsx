import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <div>Loading...</div>;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between m-4 gap-4">
          {results?.organic?.map(({ link, title, snippet }, index) => (
            <div
              key={index}
              className="md:w-3/5 w-full border dark:border-[#dddddd33] border-[#00000011]"
            >
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <p>{snippet}</p>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4">
          {results?.images?.map(({ imageUrl, title, thumbnailUrl }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
            >
              <a
                className="sm:p-3 p-5"
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={thumbnailUrl}
                  alt={title}
                  loading="lazy"
                  className="md:w-[200px] md:h-[200px] w-[300px] h-[300px] rounded object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4">
          {results?.news?.map(({ date, link, title }, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
            >
              <div className="flex flex-col items-start w-full sm:w-[250px] h-[250px] p-4 dark:bg-slate-700/70 border dark:border-[#dddddd33] border-[#1a050544] rounded-xl bg-slate-400/80 transition-all duration-300 ease-in text-2xl sm:text-lg hover:scale-105">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <div className="flex flex-col overflow-y-hidden">
                    <p className="box-content">{title}</p>
                    <p className="dark:text-blue-400 text-blue-800">{date}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4">
          {results?.videos?.map(({ title, link }, index) => (
            <div
              className="flex w-full items-center justify-center"
              key={index}
            >
              <div className="flex flex-col items-start rounded-xl w-[355px] h-[220px] border dark:border-[#dddddd33] border-[#000000ad] overflow-hidden">
                <ReactPlayer url={link} controls width="355px" height="200px" />
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="pt-3"
                >
                  <p className="pl-1 pb-1">{title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
};

export default Results;
