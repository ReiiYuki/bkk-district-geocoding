import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { centroid } from '@turf/turf'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const districtsFilePath = path.resolve(__dirname, '..', 'src', 'district.json')
const outputFilePath = path.resolve(__dirname, '..', 'test', 'bangkok-districts.json')

console.log('Reading districts data from:', districtsFilePath)
const districtsData = JSON.parse(fs.readFileSync(districtsFilePath, 'utf-8'))

const testData = districtsData.features.map((feature) => {
  const center = centroid(feature)
  const dcode = feature.properties.dcode
  const [longitude, latitude] = center.geometry.coordinates
  return {
    district: dcode,
    latitude,
    longitude,
  }
})

console.log(`Generated test data for ${testData.length} districts.`)
fs.writeFileSync(outputFilePath, `${JSON.stringify(testData, null, 2)}\n`)
console.log('Successfully wrote test data to:', outputFilePath)
