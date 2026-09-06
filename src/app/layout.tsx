import type { Metadata } from "next";
import { SerieProvider } from "@/context/SerieContext";
import { Serie } from "@/types/series";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taller 2 - CRUD de Series",
  description: "Aplicacion de series de television con React y Next.js",
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
      <body>
        <SerieProvider seriesIniciales={seriesIniciales}>
          {children}
        </SerieProvider>
      </body>
    </html>
  );
}