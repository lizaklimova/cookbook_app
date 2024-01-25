export interface AuthState {
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
  isRegistered: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isPageReloaded: boolean;
  isLoading: boolean;
}

export interface LoggedInUser {
  name: string;
  email: string;
}
