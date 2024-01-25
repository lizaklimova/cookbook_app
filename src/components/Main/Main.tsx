import { FC, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import useAuth from 'hooks/useAuth';

const Main: FC = () => {
  const {
    user: { name },
    isLoggedIn,
    isPageReloaded,
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn && !isPageReloaded) {
      const welcomeToasterOpts = {
        icon: '👨🏻‍🍳',
        style: {
          borderRadius: '10px',
          background: '#8BAA36',
          color: '#fff',
        },
      };

      toast(`Welcome, ${name} 💚`, welcomeToasterOpts);
    }
  }, [name, isLoggedIn, isPageReloaded]);

  return <div>{/* це сторінка, де хіро */}</div>;
};

export default Main;
