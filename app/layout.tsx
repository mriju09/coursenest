import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coursenest-snowy.vercel.app"),

  title: {
    default: "CourseNest — Your Career Roadmap to Job-Ready Skills",
    template: "%s | CourseNest",
  },

  description:
    "CourseNest helps you choose the right career, follow a step-by-step roadmap, build practical skills, prove your abilities, and move toward real jobs or freelance opportunities.",

  keywords: [
    "CourseNest",
    "career roadmap",
    "career guidance",
    "career planning",
    "job ready skills",
    "career development",
    "learn skills",
    "freelancing",
    "career paths",
  ],

  authors: [{ name: "CourseNest" }],
  creator: "CourseNest",
  publisher: "CourseNest",

  alternates: {
    canonical: "https://coursenest-snowy.vercel.app/",
  },

  openGraph: {
    title: "CourseNest — Your Career Roadmap to Job-Ready Skills",
    description:
      "Choose a career, follow the roadmap, build skills, prove your abilities, and move toward real opportunities.",
    url: "https://coursenest-snowy.vercel.app/",
    siteName: "CourseNest",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}