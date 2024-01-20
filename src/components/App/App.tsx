import { FC, lazy, LazyExoticComponent, ComponentType } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import useTheme from 'hooks/useTheme';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import SharedLayout from 'layout/SharedLayout';
import WelcomePage from 'pages/WelcomePage';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

const MainPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/MainPage')
);
const CategoriesPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/CategoriesPage')
);
const AddRecipesPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/AddRecipesPage')
);
const MyRecipesPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/MyRecipesPage')
);
const FavoritesPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/FavoritesPage')
);
const ShoppingListPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/ShoppingListPage')
);
const SearchPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/SearchPage')
);
const NotFoundPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/NotFoundPage')
);

const App: FC = () => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
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
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/main" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/main" />}
        />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="main"
            element={<PrivateRoute component={MainPage} redirectTo="/login" />}
          />
          <Route
            path="/categories/:categoryName"
            element={
              <PrivateRoute component={CategoriesPage} redirectTo="/login" />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute component={AddRecipesPage} redirectTo="/login" />
            }
          />
          <Route
            path="my"
            element={
              <PrivateRoute component={MyRecipesPage} redirectTo="/login" />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute component={FavoritesPage} redirectTo="/login" />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute component={ShoppingListPage} redirectTo="/login" />
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute component={SearchPage} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
