import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarr from 'components/AppBar/AppBar';

import Loader from 'loader/Loader';

export const SharedLayout: React.FC = () => {
  return (
    <>
      <AppBarr />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
