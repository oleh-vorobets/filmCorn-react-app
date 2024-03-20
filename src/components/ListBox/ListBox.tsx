import { useState } from 'react';

import './ListBox.css';

import { ListBoxType, MovieType } from './types';
import { Button } from './Button/Button';
import { MovieItem } from './MovieItem/MovieItem';
import { WatchedSummary } from './WatchedSummary/WatchedSummary';

export function ListBox({ movies, onDeleteMovie }: ListBoxType) {
    const [isOpen, setIsOpen] = useState(true);

    const isWatchedMovies = 'runtime' in movies[0];

    function handleIsOpen() {
        setIsOpen(!isOpen);
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
            {isWatchedMovies && <WatchedSummary movies={movies} />}
            {isOpen && (
                <ul className="movies-list">
                    {movies.map((movie) => (
                        <MovieItem
                            movie={movie}
                            onDeleteMovie={onDeleteMovie}
                            key={movie.imdbID}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
