import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 flex gap-6">
      <Link to="/" className="text-blue-600 font-semibold">
        Home
      </Link>
      <Link to="/forecast" className="text-blue-600 font-semibold">
        Forecast
      </Link>
    </nav>
  );
};

export default Navbar;
