import Loader from 'components/Loader/Loader';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const LayoutHeader = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutHeader;
