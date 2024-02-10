import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/Search/SearchBar';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectSearchQuery, selectSearchType } from '../redux/search/selectors';

const SearchPage: FC = () => {
  const query = useSelector(selectSearchQuery);
  const type = useSelector(selectSearchType);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query.length) {
      setSearchParams({});
    } else {
      setSearchParams({ [type]: query, page: '1' });
    }
  }, [query, type, setSearchParams]);

  return (
    <>
      <MainTitle title={'Search'} />
      <SearchBar />
    </>
  );
};

export default SearchPage;
