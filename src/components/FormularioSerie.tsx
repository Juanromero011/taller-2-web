"use client";
import { useState } from "react";
import { SerieInput } from "@/types/series";

interface FormularioSerieProps {
    valoresIniciales?: SerieInput;
    textoBoton?: string;
    onGuardar: (datos: SerieInput) => void;
}

const valoresPorDefecto: SerieInput = {
    titulo: "",
    genero: "",
    temporadas: 1,
    plataforma: "",
    calificacion: 5,
};

function FormularioSerie({
    valoresIniciales,
    textoBoton = "Guardar serie",
    onGuardar,
}: FormularioSerieProps) {
    const [form, setForm] = useState<SerieInput>(valoresIniciales ?? valoresPorDefecto);
    const [errores, setErrores] = useState<Partial<Record<keyof SerieInput, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validar = (): boolean => {
        const nuevosErrores: typeof errores = {};
        if (!form.titulo.trim()) nuevosErrores.titulo = "El titulo es obligatorio";
        if (!form.genero.trim()) nuevosErrores.genero = "El genero es obligatorio";
        if (Number(form.temporadas) < 1) nuevosErrores.temporadas = "Minimo 1 temporada";
        if (Number(form.calificacion) < 1 || Number(form.calificacion) > 10) {
            nuevosErrores.calificacion = "La calificacion debe estar entre 1 y 10";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const resetFormulario = () => {
        setForm(valoresPorDefecto);
        setErrores({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validar()) return;
        onGuardar(form);
        if (!valoresIniciales) {
            resetFormulario();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto sm:mx-0">
            <div>
                <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Titulo" className="border rounded px-3 py-2 w-full" />
                {errores.titulo && <span className="text-red-500 text-sm">{errores.titulo}</span>}
            </div>
            <div>
                <input name="genero" value={form.genero} onChange={handleChange} placeholder="Genero" className="border rounded px-3 py-2 w-full" />
                {errores.genero && <span className="text-red-500 text-sm">{errores.genero}</span>}
            </div>
            <div>
                <input name="temporadas" type="number" value={form.temporadas} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                {errores.temporadas && <span className="text-red-500 text-sm">{errores.temporadas}</span>}
            </div>
            <div>
                <input name="plataforma" value={form.plataforma} onChange={handleChange} placeholder="Plataforma" className="border rounded px-3 py-2 w-full" />
            </div>
            <div>
                <input name="calificacion" type="number" step="0.1" value={form.calificacion} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                {errores.calificacion && <span className="text-red-500 text-sm">{errores.calificacion}</span>}
            </div>
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
                {textoBoton}
            </button>
        </form>
    );
}

export default FormularioSerie;