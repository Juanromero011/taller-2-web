import Link from "next/link";
import { Serie } from "@/types/series";

interface TarjetaSerieProps {
    serie: Serie;
}

function TarjetaSerie({ serie }: TarjetaSerieProps) {
    return (
        <Link href={`/series/${serie.id}`} className="border rounded-lg p-4 block hover:bg-gray-900">
            <h2 className="font-bold text-lg">{serie.titulo}</h2>
            <p className="text-gray-600">
                {serie.genero} · {serie.temporadas} temporadas · {serie.plataforma}
            </p>
            <span>★ {serie.calificacion}</span>
            {serie.esFavorita && <span className="ml-2">⭐ Favorita</span>}
        </Link>
    );
}

export default TarjetaSerie;