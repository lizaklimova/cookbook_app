import { FormEvent } from 'react';

export interface RecipeDescriptionFieldsProps {
  value: string;
  onSubmit: (e: FormEvent, data: unknown) => void;
}
