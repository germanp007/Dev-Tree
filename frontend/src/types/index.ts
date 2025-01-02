export type User = {
  name: string;
  email: string;
  handle: string;
  _id: string;
  description: string;
  image: string;
};

export type RegisterForm = Pick<User, "handle" | "email" | "name"> & {
  password: string;
  passwordConfirmation: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};

export type ProfileForm = Pick<User, "handle" | "description">;

export type SocialNetwork = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
};
export type DevTreeLinks = Pick<SocialNetwork, "name" | "url" | "enabled">;
