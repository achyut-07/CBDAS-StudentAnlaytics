import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Student Performance Analytics Dashboard",
  description:
    "Cloud-Based Student Performance Analytics using Azure SQL & Power BI — turning student data into actionable insights for data-driven education.",
  keywords: [
    "student analytics",
    "Power BI dashboard",
    "Azure SQL",
    "data analytics",
    "education technology",
    "KPI dashboard",
  ],
  authors: [],
  openGraph: {
    title: "Student Performance Analytics Dashboard",
    description:
      "Cloud-Based Analytics using Azure SQL & Power BI — Turning Student Data into Actionable Insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
