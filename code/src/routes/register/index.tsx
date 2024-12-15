import { createFileRoute } from "@tanstack/react-router";
import { Registration } from "@/pages/Registration/Registration";

export const Route = createFileRoute("/register/")({
  component: () => <Registration />,
});
