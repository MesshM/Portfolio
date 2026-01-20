import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuel | Científico de Datos & FullStack Developer",
  description:
    "Portafolio de Manuel - Especialista en Ciencia de Datos, Automatización de IA y Desarrollo FullStack. Proyectos innovadores con tecnologías modernas.",
  keywords: [
    "Científico de Datos",
    "IA",
    "Machine Learning",
    "FullStack Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Manuel" }],
  openGraph: {
    title: "Manuel | Científico de Datos & FullStack Developer",
    description:
      "Especialista en Ciencia de Datos, Automatización de IA y Desarrollo FullStack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
