import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const RoutesComponent = () => {
  return (
    <div className="p-4 mb-auto">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
