import { FC } from 'react';

interface IMainTitleProps {
  title: string;
}

const MainTitle: FC<IMainTitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default MainTitle;
