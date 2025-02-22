import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactBox from "../components/ContactBox";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[url(/wmremove-transformed.png)] flex flex-col z-30">
      <Navbar />
      <section className="flex-1 flex flex-col justify-center items-center gap-6 pt-24 z-10">
        <motion.h1 className="text-5xl font-bold text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Welcome to Quizify</motion.h1>
        <motion.p className="text-lg text-white" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>Assess your skills with engaging quizzes</motion.p>
        <Button variant="contained" href="/assessments" className="bg-pink-600 hover:bg-pink-700">Start Now</Button>
      </section>
      <section className="text-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div><h2 className="text-xl font-semibold">Dynamic Quizzes</h2><p>Interactive and adaptive questions for all levels.</p></div>
          <div><h2 className="text-xl font-semibold">Real-time Results</h2><p>Instant feedback with explanations.</p></div>
          <div><h2 className="text-xl font-semibold">Seamless Experience</h2><p>Optimized for all devices with smooth animations.</p></div>
        </div>
      </section>
      <ContactBox />
    </div>
  );
}