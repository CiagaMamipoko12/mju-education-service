import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EnrollmentPage from "./pages/EnrollmentPage";
import TimetablePage from "./pages/TimetablePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
      </Route>
    </Routes>
  );
}