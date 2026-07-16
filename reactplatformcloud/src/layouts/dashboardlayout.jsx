import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function DashboardLayout() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        <Navbar />

        <main className="p-4">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;