import { FALLBACKS } from "../data/consts"
import { Anchor } from "../types/types"

export function calculateAverageLatLng(coordinates: Anchor[]): Anchor {
  if (!coordinates || !coordinates.length) {
    return [0, 0]
  }

  let sumLatitude = 0
  let sumLongitude = 0
  for (const coordinate of coordinates) {
    sumLatitude += coordinate[0]
    sumLongitude += coordinate[1]
  }

  const averageLatitude = sumLatitude / coordinates.length
  const averageLongitude = sumLongitude / coordinates.length

  return [averageLatitude, averageLongitude]
}

export function formatPrice(
  precio: number,
  moneda: string | undefined = FALLBACKS.CURRENCY,
  decimales: number = 0
) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: moneda,
    currencyDisplay: "symbol",
    maximumFractionDigits: decimales,
  }).format(precio)
}
