import { FC, useEffect } from 'react';
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
      const welcomeToasterOpts = {
        icon: '👨🏻‍🍳',
        style: {
          borderRadius: '10px',
          background,
          color: mainText,
        },
      };

      setTimeout(() => {
        toast(`Welcome, ${name} 💚`, welcomeToasterOpts);
      }, 1000);
    }
  }, [name, isLoggedIn, isPageReloaded, background, mainText]);

  return <div>{/* це сторінка, де хіро */}</div>;
};

export default Main;
