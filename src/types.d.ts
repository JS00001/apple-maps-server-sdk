// OBJECTS
type PoiCategory =
  | "Airport"
  | "AirportGate"
  | "AirportTerminal"
  | "AmusementPark"
  | "ATM"
  | "Aquarium"
  | "Bakery"
  | "Bank"
  | "Beach"
  | "Brewery"
  | "Cafe"
  | "Campground"
  | "CarRental"
  | "EVCharger"
  | "FireStation"
  | "FitnessCenter"
  | "FoodMarket"
  | "GasStation"
  | "Hospital"
  | "Hotel"
  | "Laundry"
  | "Library"
  | "Marina"
  | "MovieTheater"
  | "Museum"
  | "NationalPark"
  | "Nightlife"
  | "Park"
  | "Parking"
  | "Pharmacy"
  | "Playground"
  | "Police"
  | "PostOffice"
  | "PublicTransport"
  | "ReligiousSite"
  | "Restaurant"
  | "Restroom"
  | "School"
  | "Stadium"
  | "Store"
  | "Theater"
  | "University"
  | "Winery"
  | "Zoo";

type TransportType = "Automobile" | "Transit" | "Walking";

interface Location {
  latitude: number;
  longitude: number;
}

interface MapRegion {
  eastLongitude: number;
  northLatitude: number;
  southLatitude: number;
  westLongitude: number;
}

interface StructuredAddress {
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

interface Place {
  country: string;
  countryCode: string;
  displayMapRegion: MapRegion;
  formattedAddressLines: string[];
  name: string;
  coordinate: Location;
  structuredAddress: StructuredAddress;
}

interface ETA {
  destination: Location;
  distanceMeters: number;
  expectedTravelTimeSeconds: number;
  staticTravelTimeSeconds: number;
  transportType: TransportType;
}

interface SearchResponsePlace extends Place {
  poiCategory: PoiCategory;
}
