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
  console.log(location.pathname);
  console.log(results);
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between m-4  gap-4">
          {results?.organic?.map(({ link, title, snippet, index }) => (
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
        <div className="flex flex-wrap justify-center items-center ">
          {results?.images?.map(({ imageUrl, title, thumbnailUrl, index }) => (
            <div className="flex flex-col items-center  p-5 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-[0px_4px_25px_5px_#cccccc] rounded-xl">
              <a
                className="sm:p-3 p-5"
                href={imageUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={thumbnailUrl}
                  alt={title}
                  loading="lazy"
                  className="md:w-[200px] md:h-[200px] w-[300px] h-[300px] rounded"
                />
              </a>
            </div>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="flex flex-row flex-wrap m-3 items-center justify-evenly gap-8">
          {results?.news?.map(({ date, link, title, index }) => (
            <div
              key={index}
              className="flex flex-col items-start w-full sm:w-[275px] h-[250px] p-4 dark:bg-slate-700/70  border dark:border-[#dddddd33] border-[#1a050544] rounded-xl bg-slate-400/80   transition-all duration-300 ease-in text-2xl sm:text-lg hover:scale-105  "
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="hover:underline "
              >
                <div className="flex flex-col  overflow-y-hidden ">
                  <p className="box-content">{title}</p>
                  <p className="dark:text-blue-400 text-blue-800 ">{date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-row flex-wrap m-4  justify-evenly gap-10">
          {results?.videos?.map(({ title, link }) => (
            <div className="flex flex-col items-start   rounded-xl w-[355px] h-[220px] border dark:border-[#dddddd33] border-[#000000ad] overflow-hidden">
              <ReactPlayer url={link} controls width="355px" height="200px" />
              <a href={link} target="_blank" rel="noreferrer" className="pt-3">
                <p className="pl-1 pb-1">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
};

export default Results;
