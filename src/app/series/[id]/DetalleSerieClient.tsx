"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSeries } from "@/context/SerieContext";

interface DetalleSerieClientProps {
    id: string;
}

function DetalleSerieClient({ id }: DetalleSerieClientProps) {
    const router = useRouter();
    const { series, eliminarSerie } = useSeries();
    const serie = series.find((s) => s.id === Number(id));

    if (!serie) {
        return (
            <main className="max-w-2xl mx-auto p-6">
                <p>No se encontro la serie.</p>
                <Link href="/" className="text-blue-600 underline">Volver</Link>
            </main>
        );
    }

    const handleEliminar = () => {
        const confirmar = window.confirm(`¿Seguro que quieres eliminar "${serie.titulo}"?`);
        if (!confirmar) return;
        eliminarSerie(serie.id);
        router.push("/");
    };

    return (
        <main className="max-w-2xl mx-auto p-6">
            <Link href="/" className="text-blue-600 underline">← Volver</Link>
            <h1 className="text-2xl font-bold mt-4">{serie.titulo}</h1>
            <p className="text-gray-600">
                {serie.genero} · {serie.temporadas} temporadas · {serie.plataforma}
            </p>
            <p>★ {serie.calificacion}</p>
            {serie.esFavorita && <p>⭐ Favorita</p>}

            <div className="flex gap-3 mt-4">
                <Link href={`/series/${serie.id}/editar`} className="bg-blue-600 text-white rounded px-4 py-2">
                    Editar
                </Link>
                <button onClick={handleEliminar} className="bg-red-600 text-white rounded px-4 py-2">
                    Eliminar
                </button>
            </div>
        </main>
    );
}

export default DetalleSerieClient;