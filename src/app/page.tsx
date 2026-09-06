"use client";
import { useState } from "react";
import { useSeries } from "@/context/SerieContext";
import Buscador from "@/components/Buscador";
import ListaSeries from "@/components/ListaSeries";
import Link from "next/link";

export default function Home() {
  const { series, cargando, error } = useSeries();
  const [busqueda, setBusqueda] = useState("");

  const seriesFiltradas = series.filter((serie) =>
    serie.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mis Series</h1>

      {error && (
        <div className="bg-red-950 border border-red-600 text-red-300 rounded px-4 py-2 mb-4">
          {error}
        </div>
      )}

      <Link href="/series/nueva" className="inline-block mb-4 bg-blue-600 text-white rounded px-4 py-2">
        + Agregar serie
      </Link>
      <div className="mb-4">
        <Buscador onBuscar={setBusqueda} />
      </div>

      {cargando ? (
        <p className="text-gray-400">Cargando series...</p>
      ) : (
        <ListaSeries series={seriesFiltradas} />
      )}
    </main>
  );
}