function Navbar({ setSidebarOpen }) {
  return (
    <nav className="navbar bg-light px-3">
      <h4>Cloud Dashboard</h4>
      <button
        className="btn btn-outline-dark"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>


    </nav>
  );
}

export default Navbar;