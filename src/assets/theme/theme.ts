interface Theme {
  [key: string]: string;
}

const commonVars: Theme = Object.freeze({
  accentGreen: '#8BAA36',
  lightGreen: '#EBF3D4',
  white: 'fffff',
  black: '00000',
  light: '#FAFAFA',
  warning: '#F6C23E',
  error: '#E74A3B',
  success: '#3CBC81',
  dark: '#22252A',
  lightDark: '#2A2C36',
  grey: '#D9D9D9', //заглушки, кнопки редагування профілю
  titleCommon: '#001833', //основні заголовки світлої теми
  subtitleCommon: '#3E4462', //сторінка favourites заголовок рецепту
  lightOpacity: 'rgba(250,250,250,',
  easedTransition: '350ms ease-in-out',
});

export const lightTheme: Theme = Object.freeze({
  ...commonVars,
  background: '#FAFAFA',
  lightBg: '#FFFFFF', //сторінка мейн - бекраунд колор для заголовків рецептів і блок в хіро(see recipes)
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
  selectBg: '#FAFAFA', //селект секції addRecipe
  footerBg: '#22252A',
  footerButton: '#8baa36',
});

export const darkTheme: Theme = Object.freeze({
  ...commonVars,
  background: '#1E1F28',
  lightBg: '#2A2C36',
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
  selectBg: '#8BAA36',
  footerBg: '#8BAA36',
  footerButton: '#1e1f28',
});
