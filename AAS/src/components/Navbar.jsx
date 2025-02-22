import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 flex justify-between items-center p-4 text-white">
      <h1 className="text-3xl px-10 font-bold">Quizify</h1>
      <div className="space-x-4 px-10 text-lg">
        <Link to="/" className="hover:text-pink-400 ">Home</Link>
        <Link to="/assessments" className="hover:text-pink-400">Assessments</Link>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </div>
    </nav>
  );
}