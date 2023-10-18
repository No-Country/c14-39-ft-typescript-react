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
