import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feature Prioritizer – Score features by impact and effort",
  description: "A scoring matrix for startup founders and product managers to rank feature requests by customer impact, effort, and strategic alignment."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c285c6a-e6fd-456f-9195-0e54bf30cd09"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
