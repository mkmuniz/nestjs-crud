type Episode = {
    id: string;
    title: string;
    description: string;
    duration: number;
    url: string;
    serieId: string;
    createdAt: Date;
    updatedAt: Date;
};

export class Serie {
    id: string;
    name: string;
    description: string;
    image: string;
    episodes: Episode[];
}