import axios, { AxiosError, AxiosInstance } from "axios";

import {
  GeocodeInput,
  GeocodeResponse,
  ReverseGeocodeInput,
  ReverseGeocodeResponse,
  ETAInput,
  ETAResponse,
  SearchInput,
  SearchResponse,
} from "./globals";

class AppleMaps {
  accessToken: string;
  authorizationToken: string;
  accessTokenRetries: number;
  apiClient: AxiosInstance;

  constructor({ authorizationToken }: { authorizationToken: string }) {
    this.accessToken = "";
    this.accessTokenRetries = 0;
    this.authorizationToken = authorizationToken;

    if (!authorizationToken) {
      throw new Error("'authorizationToken' param is required");
    }

    this.apiClient = axios.create({
      baseURL: "https://maps-api.apple.com/v1",
    });

    this.getAccessToken();
  }

  /**
   * Take an authorization token and fetch an access token from apples servers
   */
  private async getAccessToken(): Promise<undefined> {
    try {
      const response = await this.apiClient.get("/token", {
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
      });

      this.accessToken = response.data.accessToken;
    } catch (error) {
      throw error;
    }

    return;
  }

  private async handleError<T>(err: unknown, callback: () => Promise<T>) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 401) {
        if (this.accessTokenRetries > 3) {
          throw new Error("Unable to get access token");
        }

        this.accessTokenRetries++;

        await this.getAccessToken();
        return callback();
      }
    }

    throw err;
  }

  /**
   * Returns the latitude and longitude of the address you specify.
   */
  public async geocode(input: GeocodeInput): Promise<GeocodeResponse> {
    try {
      const response = await this.apiClient.get("/geocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      return this.handleError(error, () => this.geocode(input));
    }
  }

  /**
   * Returns an array of addresses present at the coordinates you provide.
   */
  public async reverseGeocode(
    input: ReverseGeocodeInput
  ): Promise<ReverseGeocodeResponse> {
    try {
      const response = await this.apiClient.get("/reverseGeocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      return this.handleError(error, () => this.reverseGeocode(input));
    }
  }

  /**
   * Returns the estimated time of arrival (ETA) and distance between starting and ending locations.
   */
  public async eta(input: ETAInput): Promise<ETAResponse> {
    try {
      const response = await this.apiClient.get("/etas", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      return this.handleError(error, () => this.eta(input));
    }
  }

  /**
   * Find places by name or by specific search criteria.
   */
  public async search(input: SearchInput): Promise<SearchResponse> {
    try {
      const response = await this.apiClient.get("/search", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      return this.handleError(error, () => this.search(input));
    }
  }
}

export type {
  GeocodeInput,
  GeocodeResponse,
  ReverseGeocodeInput,
  ReverseGeocodeResponse,
  ETAInput,
  ETAResponse,
  SearchInput,
  SearchResponse,
};

export default AppleMaps;
