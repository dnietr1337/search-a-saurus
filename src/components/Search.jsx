import React from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import Links from './Links';
const Search = () => {
  const [text, setText] = React.useState('');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 400);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <div className="relative mt-2">
      <div className="flex flex-row align-center justify-between items-center ">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 border border-[#dddddd33] dark:bg-[#3333331c]  dark:text-white focus:outline-none  text-black text-xl rounded-xl"
          placeholder="Search for anything..."
        />
        {text && (
          <button
            type="button"
            className="absolute right-2 text-2xl text-gray-500"
            onClick={() => setText('')}
          >
            ❌
          </button>
        )}
      </div>
      <Links />
    </div>
  );
};

export default Search;
