import type { Metadata } from "next";
import "./reset.css";

export const metadata: Metadata = {
  title: "Baka UI",
  description: "A Design System Framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
