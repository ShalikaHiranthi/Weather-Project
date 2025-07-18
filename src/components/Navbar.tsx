import { Link } from "react-router-dom";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav className="bg-gray-100 shadow p-4 flex gap-6 dark:bg-gray-700">
      <Link to="/" className="text-blue-600 font-semibold dark:text-blue-100">
        Home
      </Link>
      <Link
        to="/forecast"
        className="text-blue-600 font-semibold dark:text-blue-100"
      >
        Forecast
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-100"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
