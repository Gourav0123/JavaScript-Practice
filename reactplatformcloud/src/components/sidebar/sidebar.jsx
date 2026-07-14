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

        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-hdd-network me-2"></i>
            Instances
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-device-hdd me-2"></i>
            Storage
          </a>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;