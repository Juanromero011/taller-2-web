"use client";
import { useRouter } from "next/navigation";
import { useSeries } from "@/context/SerieContext";
import FormularioSerie from "@/components/FormularioSerie";
import { SerieInput } from "@/types/series";

export default function NuevaSeriePage() {
    const router = useRouter();
    const { agregarSerie } = useSeries();

    const handleGuardar = (datos: SerieInput) => {
        agregarSerie(datos);
        router.push("/");
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Agregar serie</h1>
            <FormularioSerie onGuardar={handleGuardar} />
        </>
    );
}
