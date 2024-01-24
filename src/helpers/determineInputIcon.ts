import sprite from 'assets/icons/sprite.svg';

export const determineInputIcon = (
  success: boolean,
  error: boolean,
  warn: boolean
) => {
  let indicatorIcon;

  switch (true) {
    case success:
      indicatorIcon = `${sprite}#icon-success`;
      break;

    case error:
      indicatorIcon = `${sprite}#icon-error`;
      break;

    case warn:
      indicatorIcon = `${sprite}#icon-warning`;
      break;
  }

  return indicatorIcon;
};
