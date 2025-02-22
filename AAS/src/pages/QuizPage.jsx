import { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const questions = [
  {
    q: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: 0,
  },
  {
    q: "What hook is used for state management?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    answer: 0,
  },
  {
    q: "Which CSS framework does this app use?",
    options: ["Bootstrap", "Tailwind CSS", "Material UI", "Bulma"],
    answer: 1,
  },
];

export default function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected !== null && idx < questions.length - 1) {
      setIdx(idx + 1);
      setSelected(null);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[url(/blue1.jpg)] bg-center bg-cover transition-opacity duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
        <Navbar/>
      <div
        className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-white/30"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Question {idx + 1} of {questions.length}
        </h2>
        <p className="mb-6 text-gray-700">{questions[idx].q}</p>
        <div className="space-y-3">
          {questions[idx].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full p-3 rounded-xl border ${
                selected === i ? "bg-[#092c8eb6] text-white" : "bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <Button
          onClick={handleNext}
          disabled={selected === null}
          variant="contained"
          className="w-full !my-3 !p-2 !rounded-xl !bg-[#098e26e0] hover:bg-pink-700"
        >
          {idx === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </motion.div>
  );
}
