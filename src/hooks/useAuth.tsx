import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsPageReloaded,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isPageReloaded = useSelector(selectIsPageReloaded);
  const user = useSelector(selectUser);

  return {
    isRegistered,
    isLoggedIn,
    isRefreshing,
    isPageReloaded,
    user,
  };
};

export default useAuth;
