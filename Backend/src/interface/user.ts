export interface UserData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  city: string;
  address: string;
  image: string;
  country_id: string;
  type_id: string;
}

export interface UserDataWithId extends UserData {
  userId: string;
}

export interface UserLoginData extends Pick<UserData, "email" | "password"> {}
