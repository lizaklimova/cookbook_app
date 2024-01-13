import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
// const Categories = lazy(() => import(''));
// const MyRecipies = lazy(() => import(''));
// const Favorites = lazy(() => import(''));
// const ShoppingList = lazy(() => import(''));
// const Search = lazy(() => import(''));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
};

export default App;
