import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="font-helvetica min-h-[100vh]">
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});
