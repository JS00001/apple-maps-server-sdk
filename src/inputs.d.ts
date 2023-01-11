interface GeocodeInput {
  q: string;
  limitToCountries?: string[];
  lang?: string;
  searchLocation?: string;
  searchRegion?: string;
  userLocation?: string;
}

interface ReverseGeocodeInput {
  q: string;
  lang?: string;
}

interface ETAInput {
  origin: string;
  destinations: string[];
  transportType?: TransportType;
  departureDate?: string;
  arrivalDate?: string;
}

interface SearchInput {
  q: string;
  excludePoiCategories?: PoiCategory[];
  includePoiCategories?: PoiCategory[];
  limitToCountries?: string[];
  resultTypeFilter?: "Poi" | "Address";
  lang?: string;
  searchLocation?: string;
  searchRegion?: string;
  userLocation?: string;
}
