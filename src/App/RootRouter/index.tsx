import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../Pages/Main';
import Other from '../../Pages/Other';

export default function RootRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}
