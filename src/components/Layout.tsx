import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
