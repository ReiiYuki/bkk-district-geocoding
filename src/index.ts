import { booleanPointInPolygon, point } from '@turf/turf'
import geo from './districts.json'

function getDistrictFromLatLng(lat: number, lng: number) {
  const coordinate = point([lng, lat])

  return geo.features.find((val>ue) => {
    return booleanPointInPolygon(coordinate, value as any)
  })
}

export { getDistrictFromLatLng }
