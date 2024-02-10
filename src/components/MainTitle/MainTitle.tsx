import { FC } from 'react';
import { IMainTitleProps } from './mainTitleTypes';
import { PageTitle } from './MainTitle.styled';

const MainTitle: FC<IMainTitleProps> = ({ title }) => {
  return <PageTitle>{title}</PageTitle>;
};

export default MainTitle;
