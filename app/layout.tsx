import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavel Solano — Systems Scientist & Complex Systems Designer",
  description:
    "Strategic Project Manager especializado en la orquestación de software complejo y ciclos de vida de IA. PhD en Ingeniería de Sistemas (VSM, Cibernética de Segundo Orden).",
  keywords: [
    "Viable System Model",
    "Systems Thinking",
    "AI Architecture",
    "Complex Systems",
    "Second-Order Cybernetics",
    "Industry 5.0",
    "Project Manager",
    "México",
  ],
  authors: [{ name: "Pavel Solano García" }],
  openGraph: {
    title: "Pavel Solano — Systems Scientist",
    description: "Diseño sistemas que aprenden a mantenerse a sí mismos.",
    url: "https://pavelsolano.mx",
    siteName: "Pavel Solano",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Solano — Systems Scientist",
    description: "Diseño sistemas que aprenden a mantenerse a sí mismos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
