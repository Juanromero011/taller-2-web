"use client";
import { useState, useEffect } from "react";

interface BuscadorProps {
    onBuscar: (termino: string) => void;
}

function Buscador({ onBuscar }: BuscadorProps) {
    const [termino, setTermino] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            onBuscar(termino);
        }, 500);

        return () => clearTimeout(timer);
    }, [termino, onBuscar]);

    return (
        <input
            type="text"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            placeholder="Buscar serie..."
            className="border rounded px-3 py-2 w-full"
        />
    );
}

export default Buscador;