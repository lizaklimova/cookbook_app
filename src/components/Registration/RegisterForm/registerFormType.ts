import { ReactNode } from 'react';

export interface RegisterFormProps {
  title: string;
  text: string;
  children: ReactNode;
}

export interface Credentials {
  name?: string;
  email: string;
  password: string;
}
