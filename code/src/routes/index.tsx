import { createFileRoute } from "@tanstack/react-router";

import { Homepage } from "@/pages/Homepage/Homepage";

export const Route = createFileRoute("/")({
  component: Homepage,
});
