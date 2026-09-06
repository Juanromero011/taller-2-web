import Link from "next/link";
import { Serie } from "@/types/series";
import BotonFavorito from "./BotonFavorito";

interface TarjetaSerieProps {
    serie: Serie;
}

function TarjetaSerie({ serie }: TarjetaSerieProps) {
    return (
        <Link href={`/series/${serie.id}`} className="border rounded-lg p-4 block hover:bg-gray-900">
            <div className="flex justify-between items-start">
                <h2 className="font-bold text-lg">{serie.titulo}</h2>
                <BotonFavorito serieId={serie.id} esFavorita={serie.esFavorita} />
            </div>
            <p className="text-gray-600">
                {serie.genero} · {serie.temporadas} temporadas · {serie.plataforma}
            </p>
            <span>★ {serie.calificacion}</span>
        </Link>
    );
}

export default TarjetaSerie;