import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FooterNavigationContainer } from './FooterNavigation.styled';

const FooterNavigation: FC = () => (
  <FooterNavigationContainer>
    <Link to="/search">Ingredients</Link>
    <Link to="/add">Add recipes</Link>
    <Link to="/my">My recipes</Link>
    <Link to="/favorite">Favorite</Link>
    <Link to="/shopping-list">Shopping List</Link>
  </FooterNavigationContainer>
);

export default FooterNavigation;
