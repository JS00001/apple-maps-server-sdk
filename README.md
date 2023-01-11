
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

### 1. Navigate to [https://developer.apple.com/account](https://developer.apple.com/account)
### 2. Click **Identifiers**
![Untitled](https://user-images.githubusercontent.com/49812749/211712992-2e459e26-9a6a-4fd2-b5ed-8c2d0a5381ec.png)
### 3. At the top of the identifiers list, click the Add Identifiers button (+).
### ![image](https://user-images.githubusercontent.com/49812749/211713238-59fec13c-4a46-42ce-8150-4641d004bcf5.png)
### 4. On the following page, select the Maps IDs checkbox, and then click the Continue button at the top of the page.
![image](https://user-images.githubusercontent.com/49812749/211713539-49544342-dc00-4db7-8050-fdddb61e52f1.png)
### 5. Enter a string for the description. This can be your app name, team name, project name, or anything that conveys context and is meaningful to you.
![image](https://user-images.githubusercontent.com/49812749/211713655-cc43b1b9-686f-4aa7-8074-7c4d3bfaf7ee.png)
### 6. Review the information, then click Register.
![image](https://user-images.githubusercontent.com/49812749/211713726-f62166cf-dfe7-45ce-9c2e-16cd49c80cad.png)
### 7. Return to [https://developer.apple.com/account](https://developer.apple.com/account) and click **Keys**
![image](https://user-images.githubusercontent.com/49812749/211713918-b333144e-2791-4727-855a-99119e01a585.png)
### 8. Click the add new key button
![image](https://user-images.githubusercontent.com/49812749/211714064-ee8dcd9c-8f83-44e5-9237-0e8e5060326d.png)
### 9. Under Key Name, enter a unique name for the key. Below that, select the checkbox next to MapKit JS.
![image](https://user-images.githubusercontent.com/49812749/211714190-f43b2c0b-5aab-4ab6-a6a1-380ec402f7fc.png)
### 10. Next to the checkbox, click Configure.
![image](https://user-images.githubusercontent.com/49812749/211714351-84ea9113-44e4-45c6-8612-e4bae80683f6.png)
### 11. Select the maps ID that you just created to associate to this key. Then click save.
![image](https://user-images.githubusercontent.com/49812749/211714551-691fa503-7528-48e2-b350-863ca6e81f5b.png)
### 12. Click Continue, review the key configuration, then click Register.
![image](https://user-images.githubusercontent.com/49812749/211714596-9e7ec54c-3da8-4ac0-95c0-dc38827ff13b.png)
### 13. Click Download to download the private key. The private key is available to download a single time. If the Download button isn’t in an enabled state, you previously downloaded the key associated with this identifier.
![image](https://user-images.githubusercontent.com/49812749/211714722-a5e0ea31-d839-4119-a32c-79a202a4966f.png)
### 14. Navigate to [https://maps.developer.apple.com/token-maker](https://maps.developer.apple.com/token-maker), we will now get your Developer Id, and Mapkit JS Key ID. Begin by uploading the private key you just downloaded to `MapKit JS Private Key File`
### 15. Navigate in new tap to [https://developer.apple.com/account](https://developer.apple.com/account). Scroll down to `Membership Details` and copy your `Team ID` into the `Apple Developer Team ID` Field.
![image](https://user-images.githubusercontent.com/49812749/211715255-54898039-2416-47b3-9472-37569315c5f6.png)
![image](https://user-images.githubusercontent.com/49812749/211715328-aa1bb469-2945-4eb7-9096-71b433675299.png)
### 16. Return to [https://developer.apple.com/account](https://developer.apple.com/account) and click **Keys** then select they key you just created.
![image](https://user-images.githubusercontent.com/49812749/211713918-b333144e-2791-4727-855a-99119e01a585.png)
![image](https://user-images.githubusercontent.com/49812749/211715518-6ebb3b71-ba7f-4525-9c2e-5d4e34b6b677.png)
### 17. Copy the key Id and paste it into the Mapkit JS Key ID Field
![image](https://user-images.githubusercontent.com/49812749/211715723-a7f6d2a0-f1d5-4306-809f-34bfc9cccf80.png)
![image](https://user-images.githubusercontent.com/49812749/211715812-80026541-707e-4063-ab13-978e8cacbf46.png)
### 18. Optionally select an expiration date, then click generate. Copy the token and store it somewhere safe such as a .env file. This is the `authorizationToken` that you will pass when creating an instance of the class. Congratulations, you're ready to go!



## API

#### .geocode(options [object])

Fetch geocoded data about an address.

**options**: supports keys
- `q` \[required\] - The address to geocode. IE: 1 Apple Park, Cupertino, CA
- `limitToCountries` \[optional\] - A comma-separated list of country codes to limit the results to IE: US,CA.
- `lang` \[optional\] - The language the server should use when returning the response, specified using a BCP 47 language code. IE: en-US.
- `searchLocation` \[optional\] - A location defined as a hint. Specify the location as a comma-separated string containing the latitude and longitude. IE: 37.78,-122.42.
- `searchRegion` \[optional\] - A region defined as a hint. Specify the region specified as a comma-separated string that describes the region in the form north-latitude, east-longitude, south-latitude, west-longitude. IE: 38,-122.1,37.5,-122.5.
- `userLocation` \[optional\] - The location of the user, specified as a comma-separated string that contains the latitude and longitude. IE: 37.78,-122.42.


**response**
```
{
  "results": [
    {
      country: string;
      countryCode: string;
      displayMapRegion: {
        eastLongitude: number;
        northLatitude: number;
        southLatitude: number;
        westLongitude: number;
      };
      formattedAddressLines: string[];
      name: string;
      coordinate: {
        latitude: number;
        longitude: number;
      };
      structuredAddress: {
        administrativeArea: string;
        administrativeAreaCode: string;
        areasOfInterest: string[];
        dependentLocalities: string[];
        fullThoroughfare: string;
        locality: string;
        postCode: string;
        subLocality: string;
        subThoroughfare: string;
        thoroughfare: string;
      }
    }
  ]
}
```




