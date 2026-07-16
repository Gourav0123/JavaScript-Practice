import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <aside
      className="bg-dark text-white p-3"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <h4 className="mb-4">React Cloud</h4>

      <ul className="nav flex-column">

        <NavLink to="/" className="nav-link text-white">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </NavLink>

        {/* <NavLink to="/instances" className="nav-link text-white">
          <i className="bi bi-pc-display me-2"></i>
          Instances
        </NavLink> */}

        <li className="nav-item mb-2">
          <NavLink to="/storage" className="nav-link text-white">
            <i className="bi bi-device-hdd me-2"></i>
            Storage
          </NavLink>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;