import { Journal } from "@/pages/Journal/Journal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/")({
  component: Journal,
});
