import { FC, FormEvent } from 'react';

interface RecipeDescriptionFieldsProps {
  value: string;
  onSubmit: (e: FormEvent, data: unknown) => void;
}

// time 5mins-120mins. Interval 5mins
// selects must have visible 6 options, other scroll
const RecipeDescriptionFields: FC<RecipeDescriptionFieldsProps> = ({
  value,
  onSubmit,
}) => {
  return (
    <div>
      <input type="file" name="picture" />
      <div>
        <input type="text" name="title" />
        <input type="text" name="about" />
        <select name="category"></select>
        <select name="time"></select>
        <select name="" />
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
