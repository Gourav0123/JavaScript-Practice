import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <main className="p-4">
          {children}
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;