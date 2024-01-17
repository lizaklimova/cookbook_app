import { FC, lazy, LazyExoticComponent, ComponentType } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import useTheme from 'hooks/useTheme';
import SharedLayout from 'layout/SharedLayout';
import WelcomePage from 'pages/WelcomePage';

const RegisterPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/RegisterPage')
);
const LoginPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import('pages/LoginPage')
);
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
    </ThemeProvider>
  );
};

export default App;
