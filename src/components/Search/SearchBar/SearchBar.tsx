import { FC } from 'react';
import SearchForm from 'components/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector';
import { Container } from './SearchBar.styled';

const SearchBar: FC = () => {
  return (
    <Container>
      <SearchForm />
      <SearchTypeSelector />
    </Container>
  );
};

export default SearchBar;
