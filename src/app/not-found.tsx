import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Pagina no encontrada</h1>
            <p className="mt-2 text-gray-400">La direccion que abriste no existe.</p>
            <Link href="/" className="inline-block mt-6 bg-blue-600 text-white rounded px-4 py-2">
                Volver al inicio
            </Link>
        </div>
    );
}
