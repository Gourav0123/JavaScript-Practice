import Navbar from "./components/navbar";

// define expected props for Navbar to avoid using `any`
type NavbarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  darkMode: boolean;
  toggleTheme: () => void;
};

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* pass typed props to Navbar */}
      <Navbar
        {...({
          sidebarOpen: false,
          setSidebarOpen: (_: boolean) => {},
          darkMode: false,
          toggleTheme: () => {},
        } as NavbarProps)}
      />

      <main className="p-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Cloud Platform Dashboard
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Welcome to your cloud platform.
        </p>
      </main>
    </div>
  );
}

export default App;