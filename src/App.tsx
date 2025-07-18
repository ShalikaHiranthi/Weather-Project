import React, { useEffect, useState } from "react";
import axios from "axios";
import type { WeatherResponse } from "./types/Weather";
import WeatherCard from "./components/WeatherCard";
import WeatherCard7Days from "./components/WeatherCard7Days";

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const fetchWeatherAndCity = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          // Fetch weather
          const weatherResponse = await axios.get<WeatherResponse>(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`
          );
          setWeather(weatherResponse.data);

          // Fetch city name (reverse geocoding)
          const geoResponse = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}`
          );
          const address = geoResponse.data.address;
          setCity(
            address.city ||
              address.town ||
              address.village ||
              "Unknown location"
          );
        } catch (error) {
          console.error("Failed to fetch weather or city:", error);
          setCity("Unknown location");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setCity("Unknown location");
      }
    );
  };

  useEffect(() => {
    fetchWeatherAndCity();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 font-sans text-gray-900 p-6">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">Weather App 🌤️</h1>
        <h2 className="text-center text-xl text-indigo-700">
          Your Current City: {city || "Loading..."}
        </h2>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {weather ? (
          <>
            {/* Today Weather */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 border-b border-indigo-400 pb-2">
                Today's Weather
              </h3>
              <WeatherCard data={weather} />
            </section>

            {/* 7 Day Forecast */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 border-b border-indigo-400 pb-2">
                7-Day Forecast
              </h3>
              <WeatherCard7Days data={weather} />
            </section>
          </>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Loading weather data...
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
