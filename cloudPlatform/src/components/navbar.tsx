interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
  darkMode,
  toggleTheme,
}: NavbarProps) => {
  return (
    <nav className="flex h-16 items-center justify-between bg-indigo-600 px-6 text-white">
      <h1 className="text-xl font-bold">Cloud Platform</h1>

      <div className="flex gap-6 items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>

        <button>Dashboard</button>
        <button>Instances</button>
        <button>Storage</button>
        <button>Settings</button>

        <button onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;