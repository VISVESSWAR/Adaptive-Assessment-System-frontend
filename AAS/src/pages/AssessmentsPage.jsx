import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const assessments = [
  { id: 1, title: "Basic test", desc: "Test your fundamentals." },
];

export default function AssessmentsPage() {
  return (
    <motion.div
      className="container mx-auto bg-[url(/blue1.jpg)] bg-cover bg-center w-full min-h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="flex flex-col lg:w-[80%] w-[90%] mx-auto h-[100vh] justify-center">
        <div className="flex flex-row bg-gray-950/30 backdrop-blur-lg backdrop-saturate-150 text-white text-xl font-bold p-4 rounded-t-2xl shadow-lg border border-white/30">
          <span className="flex-1 text-center">Title</span>
          <span className="flex-1 text-center">Description</span>
          <span className="flex-1 text-center">Action</span>
        </div>

        {assessments.map((a) => (
          <div
            key={a.id}
            className="backdrop-blur-xl bg-opacity-90 text-white flex flex-col lg:flex-row items-center justify-between p-4  shadow-lg w-full  border bg-[#365962]/20 border-white "
          >
            <div className="flex-1 text-lg font-medium text-white text-center w-[33%]">
              {a.title}
            </div>
            <div className="flex-1 text-gray-200 text-center w-[33%]">{a.desc}</div>
            <Link
              to={`/quiz/${a.id}`}
              className="text-center bg-[#092c8ee0] text-white transition duration-300 w-[33%] p-2 rounded-lg hover:bg-[#263fa3] shadow-md "
            >
              Take Quiz
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
