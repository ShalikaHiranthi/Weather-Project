import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <header className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between">
          <h1 className="text-xl font-bold">Weather App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <main className="p-4">
          <p>Content here changes color based on mode!</p>
        </main>
      </div>
    </div>
  );
}
