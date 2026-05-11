import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-one-taupe-50.vercel.app"),
  title: {
    default: "Adrián Castro | Web Developer & Automation Engineer",
    template: "%s | Adrián Castro",
  },
  description:
    "Desarrollador Web y Especialista en Automatización con IA. Especializado en Next.js, TypeScript y soluciones inteligentes.",
  keywords: ["Web Developer", "Automation Engineer", "IA", "Next.js", "TypeScript", "Bots"],
  authors: [{ name: "Adrián Castro" }],
  creator: "Adrián Castro",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-one-taupe-50.vercel.app",
    title: "Adrián Castro | Web Developer & Automation Engineer",
    description: "Desarrollador Web y Especialista en Automatización con IA.",
    siteName: "Adrián Castro Portfolio",
    images: [
      {
        url: "https://portfolio-one-taupe-50.vercel.app/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Adrián Castro | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Castro | Web Developer & Automation Engineer",
    description: "Desarrollador Web y Especialista en Automatización con IA.",
    images: ["https://portfolio-one-taupe-50.vercel.app/og-image.png?v=2"],
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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
