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
  apiClient: AxiosInstance;

  constructor({ authorizationToken }: { authorizationToken: string }) {
    this.accessToken = "";
    this.authorizationToken = authorizationToken;

    if (!authorizationToken) {
      throw new Error("'authorizationToken' param is required");
    }

    this.apiClient = axios.create({
      baseURL: "https://maps-api.apple.com/v1",
    });

    this.getAccessToken();
  }

  async getAccessToken(): Promise<undefined> {
    try {
      const response = await this.apiClient.get("/token", {
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
      });

      this.accessToken = response.data.accessToken;
    } catch (error) {
      console.error(error);
    }

    return;
  }

  async geocode(input: GeocodeInput): Promise<GeocodeResponse> {
    try {
      const response = await this.apiClient.get("/geocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.geocode(input);
        } else {
          throw error;
        }
      } else throw error;
    }
  }

  async reverseGeocode(input: ReverseGeocodeInput): Promise<ReverseGeocodeResponse> {
    try {
      const response = await this.apiClient.get("/reverseGeocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.reverseGeocode(input);
        } else {
          throw error.response?.data;
        }
      } else throw error;
    }
  }

  async eta(input: ETAInput): Promise<ETAResponse> {
    try {
      const response = await this.apiClient.get("/etas", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.eta(input);
        } else {
          throw error.response?.data;
        }
      } else throw error;
    }
  }

  async search(input: SearchInput): Promise<SearchResponse> {
    try {
      const response = await this.apiClient.get("/search", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: input,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.search(input);
        } else {
          throw error.response?.data;
        }
      } else throw error;
    }
  }
}

export default AppleMaps;
