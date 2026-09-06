import { Serie } from "@/types/series";
import TarjetaSerie from "./TarjetaSerie";

interface ListaSeriesProps {
    series: Serie[];
}

function ListaSeries({ series }: ListaSeriesProps) {
    return (
        <div className="grid gap-4">
            {series.length === 0 ? (
                <p>No hay series registradas.</p>
            ) : (
                series.map((serie) => <TarjetaSerie key={serie.id} serie={serie} />)
            )}
        </div>
    );
}

export default ListaSeries;