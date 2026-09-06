import DetalleSerieClient from "./DetalleSerieClient";

export default async function DetalleSeriePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <DetalleSerieClient id={id} />;
}