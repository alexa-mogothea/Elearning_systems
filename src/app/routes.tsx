import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import StudentDashboard from "./pages/StudentDashboard";
import LessonManagement from "./pages/LessonManagement";
import QuizDashboard from "./pages/QuizDashboard";
import TopStudents from "./pages/TopStudents";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "lessons", Component: LessonManagement },
      { path: "quizzes", Component: QuizDashboard },
      { path: "leaderboard", Component: TopStudents },
    ],
  },
]);
