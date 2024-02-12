export interface Recipe {
  area: string;
  category: string;
  createdAt: string;
  description: string;
  favorites: string[];
  ingredients: object[];
  instructions: String;
  likes: string[];
  popularity: number | null;
  preview?: string;
  tags?: string[];
  thumb: string;
  time: string;
  title: string;
  updatedAt: string;
  youtube: string;
  _id: string;
}

export interface RecipesListProps {
  recipes: Recipe[];
}
