import { FC } from 'react';
import { RecipesListProps } from './RecipesListTypes';
import { Link, useLocation } from 'react-router-dom';
import { Card, Image, List, Time, Title } from './RecipesList.styled';
import { changeTime } from 'helpers/changeTime';

const RecipesList: FC<RecipesListProps> = ({ recipes }) => {
  const currentLocation = useLocation();

  return (
    <List>
      {recipes.map(recipe => {
        return (
          <Card key={recipe._id}>
            <Link
              to={`/recipe/${recipe._id}`}
              state={{ from: currentLocation }}
            >
              <Image src={recipe.thumb} alt={recipe.title} loading="lazy" />
              <Title>{recipe.title}</Title>
              <Time>{changeTime(recipe.time)}</Time>
            </Link>
          </Card>
        );
      })}
    </List>
  );
};

export default RecipesList;
