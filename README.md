# Bangkok District Geocoding

![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) ![GitLab CI](https://img.shields.io/badge/gitlab%20ci-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)



A lightweight library to find the Bangkok district based on latitude and longitude coordinates.

## Features

- **Fast and Efficient**: Quickly find a district from geographic coordinates.
- **Offline**: No network requests needed; all data is included in the package.
- **TypeScript Support**: Fully typed for a better development experience.

## Data Source

The geographic data for Bangkok's 50 districts is sourced from the official Open Government Data of Bangkok website:

- **Source**: [พื้นที่เขตปกครอง 50 เขตของกรุงเทพมหานคร](https://data.bangkok.go.th/dataset/50)

The original data was provided in Shapefile format and was converted to GeoJSON using [mygeodata.cloud](https://mygeodata.cloud/).

## Installation

```bash
pnpm install bkk-district-geocoding
# or
npm install bkk-district-geocoding
# or
yarn add bkk-district-geocoding
```

## Usage

```typescript
import { getDistrictFromLatLng } from 'bkk-district-geocoding'

const latitude = 13.7563
const longitude = 100.5018

const district = getDistrictFromLatLng(latitude, longitude)

if (district) {
  console.log(`The district is: ${district.properties.dname}`)
  console.log(`District Code: ${district.properties.dcode}`)
} else {
  console.log('No district found for the given coordinates.')
}
```

## Development

This project uses `pnpm` as the package manager.

- `pnpm install` - Install dependencies
- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm test` - Run all tests

## License

[MIT](LICENSE)
