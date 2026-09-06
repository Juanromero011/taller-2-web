"use client";
import { useSeries } from "@/context/SerieContext";

interface BotonFavoritoProps {
    serieId: number;
    esFavorita: boolean;
}

function BotonFavorito({ serieId, esFavorita }: BotonFavoritoProps) {
    const { alternarFavorito } = useSeries();

    return (
        <button
            onClick={(e) => {
                e.preventDefault(); // evita que el click active el <Link> de la tarjeta
                alternarFavorito(serieId);
            }}
            className="text-xl"
            aria-label={esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
            {esFavorita ? "⭐" : "☆"}
        </button>
    );
}

export default BotonFavorito;