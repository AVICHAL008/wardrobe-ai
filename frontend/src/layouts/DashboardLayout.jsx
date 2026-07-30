import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default DashboardLayout;