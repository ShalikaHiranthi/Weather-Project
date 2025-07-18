import React, { useEffect, useState } from "react";
import WeatherCard7Days from "../components/WeatherCard7Days";
import type { ForecastResponse } from "../types/Weather";

const ForecastPage: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(
    null
  );

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        );
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error("Failed to fetch forecast:", error);
      }
    };

    fetchForecast();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">7-Day Forecast</h1>
      {forecastData ? (
        <WeatherCard7Days data={forecastData} />
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default ForecastPage;
