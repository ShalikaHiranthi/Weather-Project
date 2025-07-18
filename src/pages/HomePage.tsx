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

  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    // Step 1: Get current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchCityName(lat, lon);
      },
      (error) => {
        console.error("Error getting location:", error);
        setCityName("Unknown location");
      }
    );
  }, []);

  // Step 2: Fetch city name using reverse geocoding API
  const fetchCityName = async (lat: number, lon: number) => {
    const apiKey = "075bebf80969fd7f46811f0ef5b270be"; // replace this
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.length > 0) {
        setCityName(data[0].name);
      } else {
        setCityName("City not found");
      }
    } catch (error) {
      console.error("Error fetching city name:", error);
      setCityName("Error");
    }
  };

  return (
    <div className="p-6 text-gray-700 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Today's Weather</h1>

      <h2 className="text-xl text-gray-600 dark:text-gray-100 p-3">
        Current city: {cityName || "Loading..."}
      </h2>
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;
