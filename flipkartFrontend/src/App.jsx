import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";

import Login from "./pages/login";
import Register from "./pages/register"
import Homepage from "./pages/homepage";
import AdminDashboard from "./pages/admin/admindashboard";
import SellerDashboard from "./pages/seller/sellerDashboard";
import CustomerDashboard from "./pages/customer/homepage"
import PublicLayout from "./layouts/publicLayout";
import AdminLayout from "./layouts/adminLayouts";
import SellerLayout from "./layouts/sellerLayouts";
import ProtectedRoute from "./routes/protectedRoutes";
function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["seller"]} />}>
          <Route element={<SellerLayout />}>
            <Route path="/seller" element={<SellerDashboard />} />
          </Route>

        </Route>

      </Routes>

    </div>
  )
}
export default App;