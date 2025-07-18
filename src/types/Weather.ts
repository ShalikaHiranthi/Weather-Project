export interface Daily {
  time: string[]; // array of date strings
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  weathercode: number[];
}

// export interface WeatherResponse {
//   latitude: number;
//   longitude: number;
//   timezone: string;
//   daily: Daily;
// }
export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: {
    temperature_2m: number;
    windspeed_10m: number;
  };
}

export interface ForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}