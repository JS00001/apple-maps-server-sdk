interface GeocodeResponse {
  response: Place[];
}

interface ReverseGeocodeResponse {
  response: Place[];
}

interface ETAResponse {
  etas: ETA[];
}

interface SearchResponse {
  displayMapRegion: MapRegion;
  results: SearchResponsePlace[];
}
