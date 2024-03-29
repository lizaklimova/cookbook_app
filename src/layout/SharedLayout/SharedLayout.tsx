import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import { BgLeavesTop, BgLeavesBottom, Main } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <BgLeavesBottom />
      <BgLeavesTop />
      <Footer />
    </>
  );
};

export default SharedLayout;
