import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import Wardrobe from "./pages/Wardrobe/Wardrobe";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Dashboard */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wardrobe" element={<Wardrobe />} />

        <Route
          path="/ai"
          element={
            <div className="p-8 text-3xl font-bold text-white">
              AI Stylist (Coming Soon)
            </div>
          }
        />

        <Route
          path="/favorites"
          element={
            <div className="p-8 text-3xl font-bold text-white">
              Favorites (Coming Soon)
            </div>
          }
        />

        <Route
          path="/settings"
          element={
            <div className="p-8 text-3xl font-bold text-white">
              Settings (Coming Soon)
            </div>
          }
        />
      </Route>

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;