export type User = {
  name: string;
  email: string;
  handle: string;
  _id: string;
  description: string;
};

export type RegisterForm = Pick<User, "handle" | "email" | "name"> & {
  password: string;
  passwordConfirmation: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};

export type ProfileForm = Pick<User, "handle" | "description">;
