import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main className="min-h-screen bg-slate-100 p-6 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Cloud Dashboard
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Sidebar is {sidebarOpen ? "Open" : "Closed"}
        </p>
      </main>
    </div>
  );
}

export default App;