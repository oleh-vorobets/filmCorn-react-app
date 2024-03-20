export interface ButtonType {
    children: string;
    onOpen: () => void;
}

interface MovieDataType {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

interface WatchedMovieType {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    runtime: number;
    imdbRating: number;
    userRating: number;
}

export type MovieType = MovieDataType | WatchedMovieType;

type MoviesType = MovieDataType[] | WatchedMovieType[];

export interface ListBoxType {
    movies: MoviesType;
    onDeleteMovie?: (deletedMovie: MovieType) => void;
}

export interface MovieItemType {
    movie: MovieType;
    onDeleteMovie?: (deletedMovie: MovieType) => void;
}
