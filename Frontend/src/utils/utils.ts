import { Anchor } from '../types/types'

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
