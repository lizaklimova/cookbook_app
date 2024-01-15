import RecipeDescriptionFields from 'components/AddRecipe/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/AddRecipe/RecipeIngredientsFields';
import RecipePreparationFields from 'components/AddRecipe/RecipePreparationFields';
import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

//TODO install React-Select
// містить стейт => зберігаються заповнені у формі  дані
// всі поля required, валідуються. Інфа якщо значення невалідне
const AddRecipeForm: FC = () => {
  const inputValues = 'test';
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate('/my');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <RecipeDescriptionFields
        value={inputValues}
        onSubmit={handleFormSubmit}
      />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
