import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Storage from "../pages/storage/Storage";
// import Instances from "../pages/instances/Instances";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DashboardLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/storage" element={<Storage />} />

          {/* <Route path="/instances" element={<Instances />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;