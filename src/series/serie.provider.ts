import { Serie } from './series.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeriesService {
    series: Serie[] = [
        {
            id: '1',
            name: 'The Walking Dead',
            description: 'The Walking Dead is an American post-apocalyptic horror television series developed by Frank Darabont. It is based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. Andrew Lincoln plays the lead character, sheriff deputy Rick Grimes, who awakens from a coma discovering a world overrun by zombies. He sets out to find his family and other survivors, and becomes the leader of a group of survivors living in a prison.',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Walking_Dead_%28season_1%29.jpg',
            episodes: [
                {
                    id: '1',
                    title: 'Days Gone Bye',
                    description: 'Rick Grimes wakes up from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family, after learning they may still be alive.',
                    duration: 60,
                    url: 'https://www.youtube.com/watch?v=KXNzYlGZKz8',
                    serieId: '1',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
        },
    ];

    getAll(): Serie[] {
        return this.series;
    }

    getById(id: String): Serie {
        const serie = this.series.find(serie => serie.id === id);

        return serie;
    }
}