"use client";
import { useState } from "react";
import { SerieInput } from "@/types/series";

interface FormularioSerieProps {
    valoresIniciales?: SerieInput;
    textoBoton?: string;
    onGuardar: (datos: SerieInput) => void;
}

type Errores = Partial<Record<keyof SerieInput, string>>;

const valoresPorDefecto: SerieInput = {
    titulo: "",
    genero: "",
    temporadas: 1,
    plataforma: "",
    calificacion: 5,
};

function validar(form: SerieInput): Errores {
    const errores: Errores = {};

    if (!form.titulo.trim()) errores.titulo = "El titulo es obligatorio";
    if (!form.genero.trim()) errores.genero = "El genero es obligatorio";
    if (!form.plataforma.trim()) errores.plataforma = "La plataforma es obligatoria";

    const temporadas = Number(form.temporadas);
    if (!Number.isInteger(temporadas) || temporadas < 1) {
        errores.temporadas = "Minimo 1 temporada";
    }

    const calificacion = Number(form.calificacion);
    if (Number.isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
        errores.calificacion = "La calificacion debe estar entre 1 y 10";
    }

    return errores;
}

function FormularioSerie({
    valoresIniciales,
    textoBoton = "Guardar serie",
    onGuardar,
}: FormularioSerieProps) {
    const [form, setForm] = useState<SerieInput>(valoresIniciales ?? valoresPorDefecto);
    const [tocados, setTocados] = useState<Partial<Record<keyof SerieInput, boolean>>>({});
    const [intentoEnviar, setIntentoEnviar] = useState(false);

    const errores = validar(form);

    const errorDe = (campo: keyof SerieInput) =>
        tocados[campo] || intentoEnviar ? errores[campo] : undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTocados({ ...tocados, [e.target.name]: true });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIntentoEnviar(true);
        if (Object.keys(errores).length > 0) return;

        onGuardar({
            ...form,
            temporadas: Number(form.temporadas),
            calificacion: Number(form.calificacion),
        });

        if (!valoresIniciales) {
            setForm(valoresPorDefecto);
            setTocados({});
            setIntentoEnviar(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 w-full max-w-md">
            <div>
                <label htmlFor="titulo" className="block text-sm mb-1">Titulo</label>
                <input
                    id="titulo" name="titulo" value={form.titulo}
                    onChange={handleChange} onBlur={handleBlur}
                    aria-invalid={errorDe("titulo") ? true : undefined}
                    aria-describedby={errorDe("titulo") ? "titulo-error" : undefined}
                    className="border rounded px-3 py-2 w-full"
                />
                {errorDe("titulo") && <span id="titulo-error" className="text-red-500 text-sm">{errorDe("titulo")}</span>}
            </div>

            <div>
                <label htmlFor="genero" className="block text-sm mb-1">Genero</label>
                <input
                    id="genero" name="genero" value={form.genero}
                    onChange={handleChange} onBlur={handleBlur}
                    aria-invalid={errorDe("genero") ? true : undefined}
                    aria-describedby={errorDe("genero") ? "genero-error" : undefined}
                    className="border rounded px-3 py-2 w-full"
                />
                {errorDe("genero") && <span id="genero-error" className="text-red-500 text-sm">{errorDe("genero")}</span>}
            </div>

            <div>
                <label htmlFor="plataforma" className="block text-sm mb-1">Plataforma</label>
                <input
                    id="plataforma" name="plataforma" value={form.plataforma}
                    onChange={handleChange} onBlur={handleBlur}
                    aria-invalid={errorDe("plataforma") ? true : undefined}
                    aria-describedby={errorDe("plataforma") ? "plataforma-error" : undefined}
                    className="border rounded px-3 py-2 w-full"
                />
                {errorDe("plataforma") && <span id="plataforma-error" className="text-red-500 text-sm">{errorDe("plataforma")}</span>}
            </div>

            <div>
                <label htmlFor="temporadas" className="block text-sm mb-1">Temporadas</label>
                <input
                    id="temporadas" name="temporadas" type="number" min="1" value={form.temporadas}
                    onChange={handleChange} onBlur={handleBlur}
                    aria-invalid={errorDe("temporadas") ? true : undefined}
                    aria-describedby={errorDe("temporadas") ? "temporadas-error" : undefined}
                    className="border rounded px-3 py-2 w-full"
                />
                {errorDe("temporadas") && <span id="temporadas-error" className="text-red-500 text-sm">{errorDe("temporadas")}</span>}
            </div>

            <div>
                <label htmlFor="calificacion" className="block text-sm mb-1">Calificacion (1 a 10)</label>
                <input
                    id="calificacion" name="calificacion" type="number" step="0.1" min="1" max="10" value={form.calificacion}
                    onChange={handleChange} onBlur={handleBlur}
                    aria-invalid={errorDe("calificacion") ? true : undefined}
                    aria-describedby={errorDe("calificacion") ? "calificacion-error" : undefined}
                    className="border rounded px-3 py-2 w-full"
                />
                {errorDe("calificacion") && <span id="calificacion-error" className="text-red-500 text-sm">{errorDe("calificacion")}</span>}
            </div>

            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
                {textoBoton}
            </button>
        </form>
    );
}

export default FormularioSerie;
