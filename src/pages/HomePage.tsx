import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import type { WeatherResponse } from "../types/Weather";

const HomePage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    // Replace with your actual API URL
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&current=temperature_2m,windspeed_10m`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Today's Weather</h1>
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;
