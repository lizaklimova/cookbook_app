import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContainer } from 'components/App/App.styled';
import ToggleBtn from './ToggleBtn';

const Header: FC = () => {
  return (
    <header>
      <MainContainer>
        <header>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              marginBottom: '50px',
            }}
          >
            <NavLink to="/main">Main</NavLink>
            <NavLink to="/categories/beef">Categories</NavLink>
            <NavLink to="add">Add recipes</NavLink>
            <NavLink to="my">My recipes</NavLink>
            <NavLink to="favorite">Favorites</NavLink>
            <NavLink to="/shopping-list">Shopping list</NavLink>
            <NavLink to="search">Search</NavLink>
          </nav>
        </header>
        <ToggleBtn />
      </MainContainer>
    </header>
  );
};

export default Header;
