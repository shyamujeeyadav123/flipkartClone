// // extract token and user from  localstorage
// // exteact token
// // exteact user
// // check login
// // check user role
// // sab sahi to return otlet
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user") || "null");

  // 1. Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. No user found
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Role check
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  // 4. Everything OK → render page
  return <Outlet />;
}

export default ProtectedRoute;