import { FC } from 'react';
import { IMainTitleProps } from './mainTitleTypes';

const MainTitle: FC<IMainTitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default MainTitle;
