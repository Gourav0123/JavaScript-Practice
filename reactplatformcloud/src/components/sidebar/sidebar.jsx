import { NavLink } from "react-router-dom";
// import { X } from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className="bg-dark text-white p-3 position-fixed top-0 start-0 h-100"
        style={{
          width: "250px",
          zIndex: 1050,
          transition: "transform .3s ease",
          transform: sidebarOpen
            ? "translateX(0)"
            : "translateX(-100%)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="m-0">TracklyFly</h4>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="nav flex-column">

          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-white"
              onClick={() => setSidebarOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/storage"
              className="nav-link text-white"
              onClick={() => setSidebarOpen(false)}
            >
              Storage
            </NavLink>
          </li>

        </ul>
      </aside>
    </>
  );
}

export default Sidebar;