import { describe, expect, it } from 'vitest'
import { getDistrictFromLatLng } from '../src'
import districts from './bangkok-districts.json'

describe('getDistrictFromLatLng', () => {
  it.each(districts.map((item) => [item]))('should get %s from lat lng', (item) => {
    const district = getDistrictFromLatLng(item.lat, item.lng)
    expect(district?.properties.dcode).toBe(item.districtCode)
  })
})
