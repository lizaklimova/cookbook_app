export interface AuthState {
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface LoggedInUser {
  name: string;
  email: string;
}
