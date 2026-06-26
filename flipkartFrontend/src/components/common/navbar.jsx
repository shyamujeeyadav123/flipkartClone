import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      {/* Logo */}
      <div className="text-2xl font-bold text-green-400">
        Flipkart Clone
      </div>

      {/* Nav Links */}
      <div className="flex gap-8">
        <Link
          to="/"
          className="hover:text-green-400 hover:underline underline-offset-4 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-green-400 hover:underline underline-offset-4 transition"
        >
          Products
        </Link>

        <Link
          to="/category"
          className="hover:text-green-400 hover:underline underline-offset-4 transition"
        >
          Category
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;