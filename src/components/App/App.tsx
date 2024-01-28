import { FC, lazy, LazyExoticComponent, ComponentType, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { AppDispatch } from 'redux/store';
import { refreshUser, logOut } from '../../redux/auth/operations';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import useTheme from 'hooks/useTheme';
import useAuth from 'hooks/useAuth';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import SharedLayout from 'layout/SharedLayout';
import WelcomePage from 'pages/WelcomePage';

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
  const dispatch: AppDispatch = useDispatch();
  const { currentTheme } = useTheme();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const loggingOut = () => {
    dispatch(logOut());
  };

  return isRefreshing ? (
    <div>Refreshing... </div>
  ) : (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Toaster position="top-center" />

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

      {isLoggedIn && (
        <button
          onClick={loggingOut}
          style={{
            backgroundColor: 'red',
            padding: '15px',
            borderRadius: '30px',
            margin: '15px',
          }}
        >
          Logout
        </button>
      )}
    </ThemeProvider>
  );
};

export default App;
