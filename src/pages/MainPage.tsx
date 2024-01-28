import { FC } from 'react';
import Main from 'components/Main';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchForm from 'components/SearchForm';

const MainPage: FC = () => {
  return (
    <div>
      <Main />
      <MainTitle title={"I'm the main page"} />
      <SearchForm />
    </div>
  );
};

export default MainPage;
