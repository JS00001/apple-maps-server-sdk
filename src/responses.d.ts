interface GeocodeResponse {
  response: Place[];
}

interface ReverseGeocodeResponse {
  response: Place[];
}

interface EstimatedArrivalResponse {
  etas: ETA[];
}

interface SearchResponse {
  displayMapRegion: MapRegion;
  results: SearchResponsePlace[];
}
