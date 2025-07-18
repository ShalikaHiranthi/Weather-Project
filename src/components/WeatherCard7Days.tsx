import React from "react";
import type { ForecastResponse } from "../types/Weather";

interface WeatherCard7DaysProps {
  data: ForecastResponse;
}

const WeatherCard7Days: React.FC<WeatherCard7DaysProps> = ({ data }) => {
  if (
    !data ||
    !data.daily ||
    !data.daily.time ||
    !data.daily.temperature_2m_max ||
    !data.daily.temperature_2m_min
  ) {
    return (
      <p className="text-center text-gray-500">Loading forecast data...</p>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.daily.time.map((date, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold mb-2 text-indigo-700">
            {new Date(date).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </h3>
          <p className="text-gray-700">
            🌡️ Max:{" "}
            <span className="font-bold">
              {data.daily.temperature_2m_max[idx]}°C
            </span>
          </p>
          <p className="text-gray-700">
            🌡️ Min:{" "}
            <span className="font-bold">
              {data.daily.temperature_2m_min[idx]}°C
            </span>
          </p>
          {/* Add precipitation or weather code here if you want */}
        </div>
      ))}
    </div>
  );
};

export default WeatherCard7Days;
