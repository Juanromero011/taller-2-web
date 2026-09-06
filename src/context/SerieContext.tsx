"use client";
import { createContext, useContext, ReactNode } from "react";
import { Serie, SerieInput } from "@/types/series";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SerieContextType {
    series: Serie[];
    agregarSerie: (input: SerieInput) => void;
    actualizarSerie: (id: number, input: SerieInput) => void;
    eliminarSerie: (id: number) => void;
    alternarFavorito: (id: number) => void;
}

const SerieContext = createContext<SerieContextType | null>(null);

export function SerieProvider({
    seriesIniciales,
    children,
}: {
    seriesIniciales: Serie[];
    children: ReactNode;
}) {
    const [series, setSeries] = useLocalStorage<Serie[]>("series", seriesIniciales);

    const agregarSerie = (input: SerieInput) => {
        const nuevaSerie: Serie = { ...input, id: Date.now(), esFavorita: false };
        setSeries((prev) => [...prev, nuevaSerie]);
    };

    const actualizarSerie = (id: number, input: SerieInput) => {
        setSeries((prev) =>
            prev.map((serie) => (serie.id === id ? { ...serie, ...input } : serie))
        );
    };

    const eliminarSerie = (id: number) => {
        setSeries((prev) => prev.filter((serie) => serie.id !== id));
    };

    const alternarFavorito = (id: number) => {
        setSeries((prev) =>
            prev.map((serie) =>
                serie.id === id ? { ...serie, esFavorita: !serie.esFavorita } : serie
            )
        );
    };

    return (
        <SerieContext.Provider
            value={{ series, agregarSerie, actualizarSerie, eliminarSerie, alternarFavorito }}
        >
            {children}
        </SerieContext.Provider>
    );
}

export function useSeries() {
    const context = useContext(SerieContext);
    if (!context) {
        throw new Error("useSeries debe usarse dentro de un SerieProvider");
    }
    return context;
}