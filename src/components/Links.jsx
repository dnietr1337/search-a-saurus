import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const links = [
  { url: '/search', text: '🔍 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📷 Images' },
  { url: '/videos', text: '📺 Videos' },
];
const Links = () => {
  const [active, setActive] = useState('🔍 All');
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          key={url}
          to={url}
          className={`text-blue-700 border-b-2 dark:text-blue-300  p-2 ${
            active === text ? 'border-blue-700' : ''
          }`}
          onClick={() => setActive(text)}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
