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
// from the API
export interface Main {
  message: string
  data: Datum[]
}

export interface Datum {
  _id: string
  name: string
  image?: string
  list_sport_centers?: ListSportCenter[]
}

export interface ListSportCenter {
  sc_info: ScInfo
  _id: string
  sc_name: string
  sc_description: string
  sc_phone: string
  sc_active: boolean
  sc_imgs: string[]
  user_id: string
  list_sport_camps: string[]
}

export interface ScInfo {
  sc_email: string
  sc_address: string
  sc_lat: number
  sc_alt: number
  sc_open: string
  sc_close: string
}

export interface Camp {
  _id: string
  sca_num: number
  sca_description: string
  sca_capacity: number
  sca_width: number
  sca_height: number
  sca_active: boolean
  sca_imgs: string[]
  camp_type_id: CampTypeID
  sport_center_id: SportCenterID
  user_id: UserID
}

export interface CampTypeID {
  _id: string
  sca_type_name: string
  sca_type_description: string
}

export interface SportCenterID {
  sc_info: ScInfo
  _id: string
  sc_name: string
  sc_description: string
  sc_active: boolean
}

export interface UserID {
  name: string
  lastname: string
  email: string
  city: string
  address: string
  image: string
  country_id: string
  type_id: string
  id: string
}

export interface Center {
  sc_info: ScInfo
  _id: string
  sc_name: string
  sc_description: string
  sc_phone: string
  sc_active: boolean
  sc_imgs: string[]
  user_id: UserID
  list_sport_camps: ListSportCamp[]
}

export interface ListSportCamp {
  _id: string
  sca_num: number
}
