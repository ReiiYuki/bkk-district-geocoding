import { booleanPointInPolygon, point } from '@turf/turf'
import geo from './districts.json' with { type: 'json' }

function getDistrictFromLatLng(lat: number, lng: number) {
  const coordinate = point([lng, lat])
  return geo.features.find((value) => {
    return booleanPointInPolygon(coordinate, value as any)
  })
}

export { getDistrictFromLatLng }
