import { ChangeEvent, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import useTheme from 'hooks/useTheme';
import { SearchButton, SearchInput, StyledForm } from './SearchForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/searchQuery/selectors';
import { updateSearchQueryAction } from '../../redux/searchQuery/slice';

const SearchForm: FC = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const query = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (pathname === '/main' && query.trim().length) {
      navigate('/search');
    }
    console.log(query);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchQueryAction(event.target.value));
  };

  return (
    <>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <StyledForm>
          <SearchInput
            value={query}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Vegan"
            onChange={handleChange}
          />
          <SearchButton
            $theme={theme === 'dark' ? 'dark' : 'light'}
            $pathname={pathname}
            type="submit"
          >
            Search
          </SearchButton>
        </StyledForm>
      </Formik>
    </>
  );
};

export default SearchForm;
