type City = {
  id: string
  name: string
}

export type Anchor = [number, number]

export interface Proveedor {
  id: number
  nombre: string
  ubicacion: string
  tamano: number
  superficie: string
  imagen: string
  instalaciones: string[]
  precio: number
  anchor: Anchor
  canchas: Cancha[]
}

export interface Cancha {
  nombre: string
  tamano: number
  superficie: string
  imagen: string
}

export interface UserData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  city?: string;
  address?: string;
  image?: string;
  country_id?: string;
  type_id?: string;
}

export interface UserDataWithId extends UserData {
  userId: string;
}

export interface UserLoginData extends Pick<UserData, "email" | "password"> { }