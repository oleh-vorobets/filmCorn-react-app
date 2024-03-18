import { useState } from 'react';

import './ListBox.css';

import { ListBoxType, MovieType } from './types';
import { Button } from './Button/Button';
import { MovieItem } from './MovieItem/MovieItem';
import { WatchedSummary } from './WatchedSummary/WatchedSummary';

export function ListBox({ initialMovies }: ListBoxType) {
    const [isOpen, setIsOpen] = useState(true);
    const [movies, setMovies] = useState([...initialMovies]);

    const isWatchedMovies = 'runtime' in movies[0];

    function handleIsOpen() {
        setIsOpen(!isOpen);
    }

    function handleDeleteMovie(deletedMovie: MovieType) {
        setMovies((movies) =>
            movies.filter((movie) => movie.imdbID !== deletedMovie.imdbID)
        );
    }

    return (
        <div className="box">
            <Button onOpen={handleIsOpen}>{isOpen ? '–' : '+'}</Button>
            {isWatchedMovies && <WatchedSummary movies={movies} />}
            {isOpen && (
                <ul className="movies-list">
                    {movies.map((movie) => (
                        <MovieItem
                            movie={movie}
                            onDeleteMovie={handleDeleteMovie}
                            key={movie.imdbID}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
