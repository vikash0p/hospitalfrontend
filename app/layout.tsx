import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "doctris",
  description: "At Dr. Vikash Pndat Clinic, we offer top-quality, compassionate medical care. Specializing in [specialties], we provide personalized treatment plans. Located in [City/Neighborhood], our services include preventive care, chronic disease management, and wellness consultations. Visit our state-of-the-art facility for accurate diagnoses and effective treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
