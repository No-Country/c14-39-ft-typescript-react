export interface Proveedor {
  id: number
  nombre: string
  ubicacion: string
  tamano: number
  superficie: string
  instalaciones: string[]
  precio: number
  anchor: Anchor
  canchas: Cancha[]
}

export interface Cancha {
  nombre: string
  tamano: number
  superficie: string
}

export type Anchor = [number, number]
