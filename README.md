
# Apple Maps Server SDK

The Apple Maps Server SDK for Node.js is a tool that helps developers access the Apple Maps API using the Node.js language. It makes it easy to search for locations, get map data, and generate directions in your Node.js apps. Additionally, it also simplifies the process of managing access tokens, making it easier for you to use the API without having to worry about managing tokens.

## Installation

Install apple-maps-server-sdk using **npm**

```bash
  npm install apple-maps-server-sdk
```

Install apple-maps-server-sdk using **yarn**

```bash
  yarn add apple-maps-server-sdk
```

### See Sections [Demo](#demo-code) or [Getting Started](#getting-started)
## Demo Code

```javascript
import AppleMaps from 'apple-maps-server-sdk'

const appleMaps = new AppleMaps({
    authorizationToken: "AUTHORIZATION TOKEN"
})

// Call the geocode function
appleMaps.geocode({
    q: '1600 Pennsylvania Avenue NW NW, Washington, D.C., 20500,'
})
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
```




## Demo Response

```javascript
{
  "results": [
    {
      "coordinate": {
        "latitude": 38.8976635,
        "longitude": -77.036574
      },
      "displayMapRegion": {
        "southLatitude": 38.8931719235794,
        "westLongitude": -77.04234524082925,
        "northLatitude": 38.9021550764206,
        "eastLongitude": -77.03080275917075
      },
      "name": "1600 Pennsylvania Ave NW",
      "formattedAddressLines": [
        "1600 Pennsylvania Ave NW",
        "Washington, DC  20500",
        "United States"
      ],
      "structuredAddress": {
        "administrativeArea": "District of Columbia",
        "administrativeAreaCode": "DC",
        "locality": "Washington",
        "postCode": "20500",
        "subLocality": "Washington Mall",
        "thoroughfare": "Pennsylvania Ave NW",
        "subThoroughfare": "1600",
        "fullThoroughfare": "1600 Pennsylvania Ave NW",
        "areasOfInterest": [
          "The White House",
          "President's Park"
        ],
        "dependentLocalities": [
          "Washington Mall"
        ]
      },
      "country": "United States",
      "countryCode": "US"
    }
  ]
}
```




## Demo (Using Require)

```javascript
const AppleMaps = require("apple-maps-server-sdk").default

const appleMaps = new AppleMaps({
    authorizationToken: "AUTHORIZATION TOKEN"
})

// Call the geocode function
appleMaps.geocode({
    q: '1600 Pennsylvania Avenue NW NW, Washington, D.C., 20500,'
})
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
```




## Demo Response

```javascript
{
  "results": [
    {
      "coordinate": {
        "latitude": 38.8976635,
        "longitude": -77.036574
      },
      "displayMapRegion": {
        "southLatitude": 38.8931719235794,
        "westLongitude": -77.04234524082925,
        "northLatitude": 38.9021550764206,
        "eastLongitude": -77.03080275917075
      },
      "name": "1600 Pennsylvania Ave NW",
      "formattedAddressLines": [
        "1600 Pennsylvania Ave NW",
        "Washington, DC  20500",
        "United States"
      ],
      "structuredAddress": {
        "administrativeArea": "District of Columbia",
        "administrativeAreaCode": "DC",
        "locality": "Washington",
        "postCode": "20500",
        "subLocality": "Washington Mall",
        "thoroughfare": "Pennsylvania Ave NW",
        "subThoroughfare": "1600",
        "fullThoroughfare": "1600 Pennsylvania Ave NW",
        "areasOfInterest": [
          "The White House",
          "President's Park"
        ],
        "dependentLocalities": [
          "Washington Mall"
        ]
      },
      "country": "United States",
      "countryCode": "US"
    }
  ]
}
```




## Getting Started
Before using this API, you must have an [Apple Developer account](https://developer.apple.com/). Once you have a developer account, follow the steps below to enable the Apple Mapbox API, and generate your Authorization Token.