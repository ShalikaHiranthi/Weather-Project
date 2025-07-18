import React from "react";
import type { WeatherResponse } from "../types/Weather";

interface Props {
  data?: WeatherResponse; // Make it optional
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  if (!data) return <p>Loading weather data...</p>;

  return (
    <div className="p-4 border rounded-lg shadow bg-white dark:bg-gray-700">
      <h2 className="text-xl font-semibold mb-2">Today's Weather</h2>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
      <p>Temperature: {data.current.temperature_2m}°C</p>
      <p>Wind Speed: {data.current.windspeed_10m} km/h</p>
    </div>
  );
};

export default WeatherCard;
