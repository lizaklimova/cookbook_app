import { FC, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import useAuth from 'hooks/useAuth';
import useTheme from 'hooks/useTheme';

const Main: FC = () => {
  const {
    user: { name },
    isLoggedIn,
    isPageReloaded,
  } = useAuth();
  const {
    currentTheme: { background, mainText },
  } = useTheme();

  useEffect(() => {
    if (isLoggedIn && !isPageReloaded) {
      setTimeout(() => {
        toast(`Welcome, ${name}`, {
          icon: '👨🏻‍🍳',
          style: {
            borderRadius: '10px',
            background,
            color: mainText,
            border: `1px solid ${mainText}`,
          },
        });
      }, 1000);
    }
  }, []);

  return <div>{/* це сторінка, де хіро */}</div>;
};

export default Main;
