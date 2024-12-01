import { createFileRoute } from "@tanstack/react-router";

import { Archive } from "@/pages/Archive/Archive";

export const Route = createFileRoute("/archive/")({
  component: () => <Archive />,
});
