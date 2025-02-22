// import { Card, CardContent } from "@/components/ui/card";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const assessments = [
  { id: 1, title: "JavaScript Basics", desc: "Test your JS fundamentals." },
  { id: 2, title: "React Pro", desc: "Advanced React concepts." },
  { id: 3, title: "Web Security", desc: "Essential security practices." },
];

export default function AssessmentsPage() {
  return (
    <motion.div
      className="container mx-auto bg-[url(/wmremove-transformed.png)] w-full min-h-[100vh] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="flex flex-col lg:w-[80%] w-[90%] mx-auto h-[100vh] justify-center">
        <div className="grid grid-cols-3 bg-[#ab0091] text-white font-semibold p-4 rounded-t-2xl">
          <span className="text-center">Title</span>
          <span className="text-center">Description</span>
          <span className="text-center">Action</span>
        </div>

        {assessments.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-3 items-center bg-white hover:shadow-2xl transition duration-300 border border-gray-200 p-4"
          >
            <div className="text-lg font-medium p-2 text-center">{a.title}</div>
            <div className="text-gray-600 p-2 text-center">{a.desc}</div>
            <Link
              to={`/quiz/${a.id}`}
              className="text-center bg-[#ad0093ea] text-white transition duration-300  p-2 rounded-lg"
            >
              Take Quiz
            </Link>
          </div>
        ))}
      </div>  
    </motion.div>
  );
}
