import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";

const BASE_URL = "http://localhost:8000"; // Backend URL

export default function PerformancePage() {
  const [userId] = useState(2); // Hardcoded for demo; replace with auth logic
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch performance metrics from the backend
  const fetchPerformance = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/performance/${userId}`);
      setPerformance(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to fetch performance data");
      setPerformance(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch performance on mount
  useEffect(() => {
    fetchPerformance();
  }, []);

  // Render loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!performance || performance.message) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-[url(/blue1.jpg)] bg-center bg-cover transition-opacity duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Navbar />
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-white/30">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">No Performance Data</h2>
          <p className="text-gray-700">{performance?.message || "No data available yet."}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[url(/blue1.jpg)] bg-center bg-cover transition-opacity duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-white/30">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Performance Metrics</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Total Questions:</strong> {performance.total_questions}
          </p>
          <p>
            <strong>Correct Answers:</strong> {performance.correct_answers}
          </p>
          <p>
            <strong>Overall Accuracy:</strong> {performance.overall_accuracy.toFixed(2)}%
          </p>
          <p>
            <strong>Ability Estimate (Theta):</strong> {performance.ability_estimate.toFixed(2)}
          </p>
          <div>
            <strong>Topic Scores:</strong>
            <ul className="list-disc pl-5 mt-2">
              {Object.entries(performance.topic_scores).map(([topic, score]) => (
                <li key={topic}>
                  {topic}: {score.toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          onClick={() => window.location.href = "/quiz"} // Redirect to quiz page
          variant="contained"
          className="w-full !my-3 !p-2 !rounded-xl !bg-[#098e26e0] hover:bg-pink-700"
        >
          Take Another Quiz
        </Button>
      </div>
    </motion.div>
  );
}