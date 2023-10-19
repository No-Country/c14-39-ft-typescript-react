import mockData from '../data/mockdata_city.json'
import { Anchor, Proveedor } from '../types/types'

export const options: Proveedor[] = mockData.map(proveedor => {
  console.log(proveedor)
  const mappedOption = {
    ...proveedor,
    title: proveedor?.nombre,
    id: Number(proveedor?.id),
    anchor: proveedor.coordenadas as Anchor,
  }
  return mappedOption
})
