import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { SerieProvider } from "@/context/SerieContext";
import { Serie } from "@/types/series";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taller 2 - Web",
  description: "Profe que hace mirando mi metadata JAJAJAJ, mentiras, este es el taller 2 hecho en NEXT",
};

const seriesIniciales: Serie[] = [
  {
    id: 1,
    titulo: "Breaking Bad",
    genero: "Drama",
    temporadas: 5,
    plataforma: "Netflix",
    calificacion: 9.5,
    esFavorita: false,
  },
  {
    id: 2,
    titulo: "Stranger Things",
    genero: "Ciencia Ficcion",
    temporadas: 4,
    plataforma: "Netflix",
    calificacion: 8.6,
    esFavorita: true,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={unbounded.className}>
        <SerieProvider seriesIniciales={seriesIniciales}>
          <Header />
          <main>{children}</main>
          <Footer />
        </SerieProvider>
      </body>
    </html>
  );
}