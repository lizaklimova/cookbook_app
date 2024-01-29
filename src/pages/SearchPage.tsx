import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/Search/SearchBar';
import { FC } from 'react';

const SearchPage: FC = () => {
  return (
    <>
      <MainTitle title={'Search'} />
      <SearchBar />
    </>
  );
};

export default SearchPage;
