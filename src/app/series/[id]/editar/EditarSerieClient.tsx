"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSeries } from "@/context/SerieContext";
import FormularioSerie from "@/components/FormularioSerie";
import { SerieInput } from "@/types/series";

interface EditarSerieClientProps {
    id: string;
}

function EditarSerieClient({ id }: EditarSerieClientProps) {
    const router = useRouter();
    const { series, actualizarSerie } = useSeries();
    const serie = series.find((s) => s.id === Number(id));

    if (!serie) {
        return (
            <main className="max-w-2xl mx-auto p-6">
                <p>No se encontro la serie.</p>
                <Link href="/" className="text-blue-600 underline">Volver</Link>
            </main>
        );
    }

    const handleGuardar = (datos: SerieInput) => {
        actualizarSerie(serie.id, datos);
        router.push(`/series/${serie.id}`);
    };

    return (
        <main className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Editar serie</h1>
            <FormularioSerie
                valoresIniciales={{
                    titulo: serie.titulo,
                    genero: serie.genero,
                    temporadas: serie.temporadas,
                    plataforma: serie.plataforma,
                    calificacion: serie.calificacion,
                }}
                textoBoton="Guardar cambios"
                onGuardar={handleGuardar}
            />
        </main>
    );
}

export default EditarSerieClient;