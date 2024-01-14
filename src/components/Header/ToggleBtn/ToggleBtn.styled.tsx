import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

interface ThemeSwitcherProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: { 'aria-label': string };
}

export const ThemeSwitcher = styled(Switch)<ThemeSwitcherProps>(
  ({ theme }) => ({
    width: 55,
    height: 27,
    padding: 0,
    display: 'flex',

    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 3,
      '&.Mui-checked': {
        transform: 'translateX(100%)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'light' ? '#ffffff' : '#ffffff',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.7)',
      width: 21,
      height: 21,
      borderRadius: 50,
      transition: theme.transitions.create(['width'], {
        duration: 300,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 50 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'light' ? '#8BAA36' : '#8BAA36',
      boxSizing: 'border-box',
    },
  })
);
