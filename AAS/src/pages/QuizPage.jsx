import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";

const BASE_URL = "http://localhost:8000"; // Backend URL
const MAX_QUESTIONS = 10; // Limit to 10 questions

export default function QuizPage() {
  const [userId] = useState(2); // Hardcoded for demo; replace with auth logic
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0); // Track question number (starts at 0)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch the next question from the backend
  const fetchNextQuestion = async () => {
    if (questionIndex >= MAX_QUESTIONS) {
      // Redirect to performance page after 10 questions
      window.location.href = "/performance";
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/next_question/`, {
        params: { user_id: userId },
      });
      console.log(response);
      setCurrentQuestion(response.data);
      setQuestionIndex((prev) => prev + 1); // Increment question number
      setSelected(null);
    } catch (err) {
      if (err.response?.status === 404) {
        // Redirect to performance page if no more questions are available
        window.location.href = "/performance";
      } else {
        setError(err.response?.data?.detail || "Failed to fetch question");
      }
    } finally {
      setLoading(false);
    }
  };

  // Submit answer and fetch next question
  const handleSubmitAnswer = async () => {
    if (selected === null) {
      setError("Please select an answer");
      return;
    }

    setLoading(true);
    setError(null);
    const answer = currentQuestion[`option_${String.fromCharCode(97 + selected)}`];

    try {
      await axios.post(`${BASE_URL}/submit_answer/`, null, {
        params: {
          user_id: userId,
          question_id: currentQuestion.id,
          answer: answer,
          response_time: 5.0, // Hardcoded for demo; measure time in real app
        },
      });
      await fetchNextQuestion(); // Fetch next adaptive question or redirect
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to submit answer");
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial question on mount
  useEffect(() => {
    fetchNextQuestion();
  }, []);

  // Render loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!currentQuestion) return <div>No questions available</div>;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[url(/blue1.jpg)] bg-center bg-cover transition-opacity duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-white/30">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Question {questionIndex} of {MAX_QUESTIONS}
        </h2>
        <p className="mb-6 text-gray-700">{currentQuestion.text}</p>
        <div className="space-y-3">
          {[currentQuestion.option_a, currentQuestion.option_b, currentQuestion.option_c, currentQuestion.option_d].map(
            (opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full p-3 rounded-xl border ${
                  selected === i ? "bg-[#092c8eb6] text-white" : "bg-gray-100"
                }`}
              >
                {opt}
              </button>
            )
          )}
        </div>
        <Button
          onClick={handleSubmitAnswer}
          disabled={selected === null || loading}
          variant="contained"
          className="w-full !my-3 !p-2 !rounded-xl !bg-[#098e26e0] hover:bg-pink-700"
        >
          {questionIndex === MAX_QUESTIONS ? "Finish" : "Next"}
        </Button>
      </div>
    </motion.div>
  );
}