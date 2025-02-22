import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const { hash } = useLocation();

  // Scroll to section when hash changes
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 flex justify-between items-center p-4 text-white">
      <h1 className="text-3xl px-10 font-bold">Quizify</h1>
      <div className="space-x-4 px-10 text-lg transition ease-in-out">
        <Link
          to="/"
          className="hover:font-bold  transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/assessments"
          className="hover:font-bold  transition duration-300"
        >
          Assessments
        </Link>
        <Link
          to="/#contact"
          className="hover:font-bold  transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
