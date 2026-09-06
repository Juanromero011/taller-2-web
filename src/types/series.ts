export interface Serie {
    id: number;
    titulo: string;
    genero: string;
    temporadas: number;
    plataforma: string;
    calificacion: number;
    esFavorita: boolean;
}

export interface SerieInput {
    titulo: string;
    genero: string;
    temporadas: number;
    plataforma: string;
    calificacion: number;
}