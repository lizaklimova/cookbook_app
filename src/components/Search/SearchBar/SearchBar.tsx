import { FC } from 'react';
import SearchForm from 'components/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector';

const SearchBar: FC = () => {
  return (
    <div>
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};

export default SearchBar;
