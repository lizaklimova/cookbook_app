import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/Search/SearchBar';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectSearchQuery, selectSearchType } from '../redux/search/selectors';
import RecipesList from 'components/RecipesList';
import { tempdata } from '../components/RecipesList/tempData/allRecipes';
import { Recipe } from 'components/RecipesList/RecipesListTypes';

const SearchPage: FC = () => {
  const query = useSelector(selectSearchQuery);
  const type = useSelector(selectSearchType);
  const [searchParams, setSearchParams] = useSearchParams();
  const recipes: Recipe[] = tempdata.filter(
    item => item.category === 'Vegan' || item.category === 'Vegetarian'
  );

  console.log(searchParams);

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
      <RecipesList recipes={recipes} />
    </>
  );
};

export default SearchPage;
