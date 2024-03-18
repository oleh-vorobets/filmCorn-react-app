import { useState } from 'react';

import './ListBox.css';

import { ListBoxType, MovieType } from './types';
import { Button } from './Button/Button';
import { MovieItem } from './MovieItem/MovieItem';

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

    const moviesCount = movies.length;

    // Counting average measurements
    let averageImdb = 0,
        averageUserRating = 0,
        averageRuntime = 0;
    for (let movie of movies) {
        if ('imdbRating' in movie) {
            averageImdb += +movie.imdbRating;
        }
        if ('userRating' in movie) {
            averageUserRating += movie.userRating;
        }
        if ('runtime' in movie) {
            averageRuntime += movie.runtime;
        }
    }
    averageImdb /= moviesCount;
    averageUserRating /= moviesCount;
    averageRuntime /= moviesCount;

    return (
        <div className="box">
            <Button onOpen={handleIsOpen}>{isOpen ? '–' : '+'}</Button>
            {isWatchedMovies && (
                <div className="summary">
                    <h2>Movies you watched</h2>
                    <div className="summary-info">
                        <span>#️⃣ {movies.length} movies</span>
                        <span>⭐️ {averageImdb}</span>
                        <span>🌟 {averageUserRating}</span>
                        <span>⏳ {averageRuntime}</span>
                    </div>
                </div>
            )}
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
