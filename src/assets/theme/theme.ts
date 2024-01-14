interface Theme {
  [key: string]: string;
}

export const commonVars: Theme = Object.freeze({
  accentGreen: '#8BAA36',
  lightGreen: '#EBF3D4',
  white: 'fffff',
  black: '00000',
  light: '#FAFAFA',
  dark: '#22252A',
  grey: '#D9D9D9', //заглушки, кнопки редагування профілю
  title: '#001833', //основні заголовки світлої теми
  subtitle: '#3E4462', //сторінка favourites заголовок рецепту

  easedTransition: '350ms ease-in-out',
});

export const lightTheme: Theme = Object.freeze({
  ...commonVars,
  background: '#FAFAFA',
  fill: '#22252A', //кнопка хіро в інпуті
  mainText: '#23262A',
  title: '#001833',
  subtitle: '#3E4462', //головна сторінка заголовок рецептів
  strokes: '#22252A',
  heroInput: '#BDBDBD',
  scrollbar: '#E7E5E5',
  paginationBg: '#FAFAFA',
  paginationItem: '#656565',
  paginationArrow: 'rgba(169, 169, 169, 0.73)',
  paginationActiveBg: '#8BAA36',
  paginationActiveText: '#FAFAFA',
});

export const darkTheme: Theme = Object.freeze({
  ...commonVars,
  background: '#1E1F28',
  fill: '#8BAA36',
  mainText: '#FAFAFA',
  title: '#FAFAFA',
  subtitle: '#FAFAFA',
  strokes: '#FAFAFA',
  heroInput: 'rgba(250, 250, 250, 0.50)',
  scrollbar: '#1E1F28',
  paginationBg: '#2A2C36',
  paginationItem: 'rgba(250, 250, 250, 0.60)',
  paginationArrow: 'rgba(250, 250, 250, 0.60)',
  paginationActiveBg: '#EBF3D4',
  paginationActiveText: '#22252A',
});
