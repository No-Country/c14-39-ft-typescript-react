import mockData from '../data/mockdata.json'
import { Anchor, Proveedor } from '../types/types'

export const options: Proveedor[] = mockData.map(proveedor => {
  const mappedOption = {
    ...proveedor,
    title: proveedor?.nombre,
    id: Number(proveedor?.id),
    anchor: proveedor.anchor as Anchor,
  }
  return mappedOption
})
