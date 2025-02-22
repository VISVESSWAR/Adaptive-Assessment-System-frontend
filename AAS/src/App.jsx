import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage.jsx';
import AssessmentsPage from './pages/AssessmentsPage';
import QuizPage from './pages/QuizPage';
import PerformancePage from './pages/PerformancePage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/assessments" element={<AssessmentsPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}