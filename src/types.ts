export interface Recipe {
  id: string;
  title: string;
  dateCreated: string;
  authorId: string;
  instructions: string[];
  tags: string[];
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  recipeIds: string[];
}
