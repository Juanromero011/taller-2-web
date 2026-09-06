import EditarSerieClient from "./EditarSerieClient";

export default async function EditarSeriePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <EditarSerieClient id={id} />;
}