import AddRecipeForm from 'components/AddRecipe';
import MainTitle from 'components/MainTitle/MainTitle';

const AddRecipesPage = () => {
  return (
    <>
      <section>
        <MainTitle title={'Add recipe'} />
        <AddRecipeForm />
      </section>
    </>
  );
};

export default AddRecipesPage;
