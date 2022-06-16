import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from '../NavBar';

export const Wrapper = () => {
  return (
    <>
      <NavBar />
      <p>Wrapper</p>
      <Outlet />
    </>
  );
};
