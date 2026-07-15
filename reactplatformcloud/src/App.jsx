import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <DashboardLayout>
      <Dashboard />
      <h1 style={{ color: "red" }}>TEST 123</h1>
    </DashboardLayout>
  );
}

export default App;