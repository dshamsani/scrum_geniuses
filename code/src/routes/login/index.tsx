import { createFileRoute } from "@tanstack/react-router";
import { LogInPage } from "@/pages/LogIn/LogInPage";

export const Route = createFileRoute("/login/")({
  component: () => <LogInPage />,
});
