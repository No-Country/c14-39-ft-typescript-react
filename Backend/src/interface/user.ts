export interface UserData {
  name: string,
  lastname: string,
  email: string,
  password: string,
  city: string,
  address: string,
  image: string,
  countryId: string
  typeId: string
}

export interface UserDataWithId extends UserData {
  userId: string
}

export interface UserLoginData extends Pick<UserData, "email" | "password"> { }
