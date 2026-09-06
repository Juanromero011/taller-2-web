"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item) as T);
            }
        } catch {
            setError("No se pudo leer la informacion guardada en este navegador.");
        } finally {
            setCargando(false);
        }
    }, [key]);

    useEffect(() => {
        if (cargando) return;
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
            setError(null);
        } catch {
            setError("No se pudo guardar la informacion en este navegador.");
        }
    }, [key, storedValue, cargando]);

    return [storedValue, setStoredValue, cargando, error] as const;
}

export default useLocalStorage;