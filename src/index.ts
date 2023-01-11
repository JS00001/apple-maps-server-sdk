import axios, { AxiosError, AxiosInstance } from "axios";
import qs from "qs";

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
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: "comma" }),
      },
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
    const params = qs.stringify(input);

    try {
      const response = await this.apiClient.get("/geocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params,
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
    const params = qs.stringify(input);

    try {
      const response = await this.apiClient.get("/reverseGeocode", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.reverseGeocode(input);
        } else {
          throw error;
        }
      } else throw error;
    }
  }

  async eta(input: ETAInput): Promise<ETAResponse> {
    const params = qs.stringify(input);

    try {
      const response = await this.apiClient.get("/etas", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.eta(input);
        } else {
          throw error;
        }
      } else throw error;
    }
  }

  async search(input: SearchInput): Promise<SearchResponse> {
    const params = qs.stringify(input);

    try {
      const response = await this.apiClient.get("/search", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await this.getAccessToken();
          return this.search(input);
        } else {
          throw error;
        }
      } else throw error;
    }
  }
}

export default AppleMaps;
