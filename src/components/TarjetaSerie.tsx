import Link from "next/link";
import { Serie } from "@/types/series";
import BotonFavorito from "./BotonFavorito";

interface TarjetaSerieProps {
    serie: Serie;
}

function TarjetaSerie({ serie }: TarjetaSerieProps) {
    return (
        <Link href={`/series/${serie.id}`} className="border rounded-lg p-4 block hover:bg-gray-900 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                <h2 className="font-bold text-lg">{serie.titulo}</h2>
                <BotonFavorito serieId={serie.id} esFavorita={serie.esFavorita} />
            </div>
            <p className="text-gray-400 mt-2">
                {serie.genero} · {serie.temporadas} temporadas · {serie.plataforma}
            </p>
            <span className="block mt-1">★ {serie.calificacion}</span>
        </Link>
    );
}

export default TarjetaSerie;