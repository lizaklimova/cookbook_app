import { ReactNode } from 'react';

export interface LoginFormProps {
  title: string;
  text: string;
  login?: boolean;
  children: ReactNode;
}

export interface CredentialsLog {
  email: string;
  password: string;
}
