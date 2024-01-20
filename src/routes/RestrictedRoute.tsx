import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRouteProps } from './privateType';

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
