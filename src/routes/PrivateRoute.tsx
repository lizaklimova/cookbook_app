import { FC } from 'react';
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  redirectTo: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
export default PrivateRoute;
