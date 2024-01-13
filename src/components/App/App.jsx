import { lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';
import WellcomePage from 'pages/WellcomePage';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipesPage = lazy(() => import('pages/AddRecipesPage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  return (
    <>
      <header>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <NavLink to="/categories/beef">Categories</NavLink>
          <NavLink to="add">Add recipes</NavLink>
          <NavLink to="my">My recipes</NavLink>
          <NavLink to="favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
          <NavLink to="search">Search</NavLink>
        </nav>
      </header>

      <Routes>
        {/* <Route path="/" element={<WellcomePage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipesPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
