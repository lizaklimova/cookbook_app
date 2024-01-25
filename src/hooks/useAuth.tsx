import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsPageReloaded,
  selectIsLoading,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isPageReloaded = useSelector(selectIsPageReloaded);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  return {
    isRegistered,
    isLoggedIn,
    isRefreshing,
    isPageReloaded,
    isLoading,
    user,
  };
};

export default useAuth;
