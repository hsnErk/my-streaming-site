export type ContentType = "movie" | "series";

// What a card needs -nothing more
export interface CardContent
{
    id: number;
    type: ContentType;
    title: string;
    thumbnail: string;
    genre: string[];
    year: number;
    rating: number;
}

// The full objevct a detail page needs
export interface Content extends CardContent
{
    duration: string;
    description: string;
    cast: string[];
    banner: string;
    trailerUrl?: string;
}

export const contents: Content[] = [
    {
        id: 1,
        type: "movie",
        title: "Interstellar",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BOWRiMWNmZGMtZWIzMS00Mzk1LWJhOGQtZmFiNTgwZmVmOTMzXkEyXkFqcGc@._V1_QL75_UX226.5_.jpg",
        banner: "https://m.media-amazon.com/images/M/MV5BODQ5OWZjZmItZTExZC00MDk3LThiNTEtZTYwZWQyNzU0YTJhXkEyXkFqcGc@._V1_QL75_UX582_.jpg",
        genre: ["Sci-Fi", "Drama"],
        year: 2014,
        rating: 8.7,
        duration: "2h 49m",
        description: "A team travels through a wormhole in search of a new home for humanity.",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 2,
        type: "series",
        title: "Stranger Things",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTg2Njk0MTg0OV5BMl5BanBnXkFtZTgwMDcxODY2MzI@._V1_QL75_UX217.5_.jpg",
        banner: "https://m.media-amazon.com/images/M/MV5BMDRlYjc5YWItYTUwNy00ODhjLWJhNmItMmJlNTI4ZWQ1ZDQ4XkEyXkFqcGc@._V1_QL75_UX462_.jpg",
        genre: ["Sci-Fi", "Horror", "Drama"],
        year: 2016,
        rating: 8.7,
        duration: "4 Seasons",
        description: "When a young boy vanishes, a small town uncovers a mystery of government experiments, terrifying supernatural forces and one strange little girl.",
        cast: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        trailerUrl: "https://www.youtube.com/embed/mnd7sFt5c3A"
    },
    {
        id: 3,
        type: "movie",
        title: "The Dark Knight",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BYzZmODUwZjItMmJkZS00ODFiLWI1ZjEtZWY0YjY0ZWQxMWVlXkEyXkFqcGc@._V1_QL75_UX220.5_.jpg",
        banner: "https://m.media-amazon.com/images/M/MV5BYTExMWU2YWYtNzQ5YS00YTAxLWE4OTktZDNmOTljYTkwN2I2XkEyXkFqcGc@._V1_QL75_UX582_.jpg",
        genre: ["Action", "Crime", "Drama"],
        year: 2008,
        rating: 9.0,
        duration: "2h 32m",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 4,
        type: "series",
        title: "The Crown",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMjhhN2YxOTMtMjZmNC00YTQyLTg0OTktMzI1NjFjN2EzZTgxXkEyXkFqcGc@._V1_QL75_UX217.5_.jpg",
        banner: "https://m.media-amazon.com/images/M/MV5BYzk5YzhjMmUtNDFmYi00ZmI3LTg0NzYtOTk3ODE0ZDg2ZjBiXkEyXkFqcGc@._V1_QL75_UX621_.jpg",
        genre: ["Drama", "History"],
        year: 2016,
        rating: 8.6,
        duration: "6 Seasons",
        description: "The story of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
        trailerUrl: "https://www.youtube.com/embed/JWtnJjn6ng0"
    },
    {
        id: 5,
        type: "movie",
        title: "Parasite",
        thumbnail: "https://picsum.photos/seed/parasite-card/300/450",
        banner: "https://picsum.photos/seed/parasite-banner/1280/780",
        genre: ["Comedy", "Drama", "Thriller"],
        year: 2019,
        rating: 8.6,
        duration: "2h 12m",
        description: "A poor family schemes to become employed by a wealthy household, but their plan eventually unravels.",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
        id: 6,
        type: "series",
        title: "Breaking Bad",
        thumbnail: "https://picsum.photos/seed/breaking-bad-card/300/450",
        banner: "https://picsum.photos/seed/breaking-bad-banner/1280/780",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2008,
        rating: 9.5,
        duration: "5 Seasons",
        description: "A high school chemistry teacher diagnosed with a terminal lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY"
    },
    {
        id: 7,
        type: "movie",
        title: "The Matrix",
        thumbnail: "https://picsum.photos/seed/the-matrix-card/300/450",
        banner: "https://picsum.photos/seed/the-matrix-banner/1280/780",
        genre: ["Action", "Sci-Fi"],
        year: 1999,
        rating: 8.7,
        duration: "2h 16m",
        description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 8,
        type: "series",
        title: "Game of Thrones",
        thumbnail: "https://picsum.photos/seed/game-of-thrones-card/300/450",
        banner: "https://picsum.photos/seed/game-of-thrones-banner/1280/780",
        genre: ["Action", "Adventure", "Drama"],
        year: 2011,
        rating: 9.2,
        duration: "8 Seasons",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        cast: ["Emilia Clarke", "Kit Harington", "Sophie Turner"],
        trailerUrl: "https://www.youtube.com/embed/bjqEWgDVPe0"
    },
    {
        id: 9,
        type: "movie",
        title: "The Shawshank Redemption",
        thumbnail: "https://picsum.photos/seed/the-shawshank-redemption-card/300/450",
        banner: "https://picsum.photos/seed/the-shawshank-redemption-banner/1280/780",
        genre: ["Drama"],
        year: 1994,
        rating: 9.3,
        duration: "2h 22m",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        trailerUrl: "https://www.youtube.com/embed/NmzuHjWmXOc"
    },
    {
        id: 10,
        type: "series",
        title: "The Mandalorian",
        thumbnail: "https://picsum.photos/seed/the-mandalorian-card/300/450",
        banner: "https://picsum.photos/seed/the-mandalorian-banner/1280/780",
        genre: ["Action", "Adventure", "Sci-Fi"],
        year: 2019,
        rating: 8.8,
        duration: "2 Seasons",
        description: "A lone bounty hunter in the outer reaches of the galaxy finds himself in the company of a youngling and must protect him at all costs.",
        cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
        trailerUrl: "https://www.youtube.com/embed/aOC8E8z_ifw"
    },
    {
        id: 11,
        type: "movie",
        title: "The Godfather",
        thumbnail: "https://picsum.photos/seed/the-godfather-card/300/450",
        banner: "https://picsum.photos/seed/the-godfather-banner/1280/780",
        genre: ["Crime", "Drama"],
        year: 1972,
        rating: 9.2,
        duration: "2h 55m",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        trailerUrl: "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        id: 12,
        type: "series",
        title: "The Witcher",
        thumbnail: "https://picsum.photos/seed/the-witcher-card/300/450",
        banner: "https://picsum.photos/seed/the-witcher-banner/1280/780",
        genre: ["Action", "Adventure", "Fantasy"],
        year: 2019,
        rating: 8.2,
        duration: "2 Seasons",
        description: "A young man named Geralt of Rivia, a mutated human known as a Witcher, struggles to find his place in a world divided by prejudice and war.",
        cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        trailerUrl: "https://www.youtube.com/embed/ndl1W4ltcmg"
    },
    {
        id: 13,
        type: "movie",
        title: "Pulp Fiction",
        thumbnail: "https://picsum.photos/seed/pulp-fiction-card/300/450",
        banner: "https://picsum.photos/seed/pulp-fiction-banner/1280/780",
        genre: ["Crime", "Drama"],
        year: 1994,
        rating: 8.9,
        duration: "2h 34m",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        id: 14,
        type: "series",
        title: "The Office",
        thumbnail: "https://picsum.photos/seed/the-office-card/300/450",
        banner: "https://picsum.photos/seed/the-office-banner/1280/780",
        genre: ["Comedy"],
        year: 2005,
        rating: 9.0,
        duration: "9 Seasons",
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        cast: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
        trailerUrl: "https://www.youtube.com/embed/-C2z-nshFts"
    },
    {
        id: 15,
        type: "movie",
        title: "Forrest Gump",
        thumbnail: "https://picsum.photos/seed/forrest-gump-card/300/450",
        banner: "https://picsum.photos/seed/forrest-gump-banner/1280/780",
        genre: ["Drama", "Romance"],
        year: 1994,
        rating: 8.8,
        duration: "2h 22m",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        trailerUrl: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
        id: 16,
        type: "series",
        title: "Friends",
        thumbnail: "https://picsum.photos/seed/friends-card/300/450",
        banner: "https://picsum.photos/seed/friends-banner/1280/780",
        genre: ["Comedy", "Romance"],
        year: 1994,
        rating: 8.9,
        duration: "10 Seasons",
        description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        cast: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        trailerUrl: "https://www.youtube.com/embed/Zg2LCD5QOJs"
    },
    {
        id: 17,
        type: "movie",
        title: "The Lion King",
        thumbnail: "https://picsum.photos/seed/the-lion-king-card/300/450",
        banner: "https://picsum.photos/seed/the-lion-king-banner/1280/780",
        genre: ["Animation", "Adventure", "Drama"],
        year: 1994,
        rating: 8.5,
        duration: "1h 28m",
        description: "A young lion prince is cast out of his pride by his bitter uncle, who claims the throne after killing the old king.",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        trailerUrl: "https://www.youtube.com/embed/lFzVJEksoDY"
    },
    {
        id: 18,
        type: "series",
        title: "The Simpsons",
        thumbnail: "https://picsum.photos/seed/the-simpsons-card/300/450",
        banner: "https://picsum.photos/seed/the-simpsons-banner/1280/780",
        genre: ["Animation", "Comedy"],
        year: 1989,
        rating: 9.0,
        duration: "30 Seasons",
        description: "The animated series follows the lives of the Simpson family in the fictional town of Springfield.",
        cast: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright"],
        trailerUrl: "https://www.youtube.com/embed/DX1iplQQJTo"
    },
    {
        id: 19,
        type: "movie",
        title: "The Avengers",
        thumbnail: "https://picsum.photos/seed/the-avengers-card/300/450",
        banner: "https://picsum.photos/seed/the-avengers-banner/1280/780",
        genre: ["Action", "Adventure", "Sci-Fi"],
        year: 2012,
        rating: 8.0,
        duration: "2h 23m",
        description: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
        cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
        trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
        id: 20,
        type: "series",
        title: "The Big Bang Theory",
        thumbnail: "https://picsum.photos/seed/the-big-bang-theory-card/300/450",
        banner: "https://picsum.photos/seed/the-big-bang-theory-banner/1280/780",
        genre: ["Comedy", "Romance"],
        year: 2009,
        rating: 8.4,
        duration: "12 Seasons",
        description: "A woman who moves into an apartment next to two brilliant but socially awkward physicists and a beautiful young woman who is the embodiment of everything they are not.",
        cast: ["Johnny Galecki", "Jim Parsons", "Kaley Cuoco"],
        trailerUrl: "https://www.youtube.com/embed/WBb3fojgW0Q"
    }
];
