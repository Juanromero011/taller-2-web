interface EsqueletoListaProps {
    cantidad?: number;
}

function EsqueletoLista({ cantidad = 3 }: EsqueletoListaProps) {
    return (
        <div className="grid gap-4" aria-busy="true" aria-label="Cargando series">
            {Array.from({ length: cantidad }, (_, indice) => (
                <div key={indice} className="border rounded-lg p-4 animate-pulse">
                    <div className="h-5 w-1/2 rounded bg-gray-700" />
                    <div className="h-4 w-3/4 rounded bg-gray-700 mt-3" />
                    <div className="h-4 w-16 rounded bg-gray-700 mt-2" />
                </div>
            ))}
        </div>
    );
}

export default EsqueletoLista;
