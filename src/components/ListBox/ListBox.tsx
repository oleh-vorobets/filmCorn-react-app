import { useState } from 'react';

import './ListBox.css';

import { ListBoxType, MovieType } from './types';
import { Button } from './Button/Button';
import { MovieItem } from './MovieItem/MovieItem';

export function ListBox({ initialMovies }: ListBoxType) {
    const [isOpen, setIsOpen] = useState(true);
    const [movies, setMovies] = useState([...initialMovies]);

    function handleIsOpen() {
        setIsOpen(!isOpen);
    }

    function handleDeleteMovie(deletedMovie: MovieType) {
        setMovies((movies) =>
            movies.filter((movie) => movie.Title !== deletedMovie.Title)
        );
    }
    return (
        <div className="box">
            <Button onOpen={handleIsOpen}>{isOpen ? '–' : '+'}</Button>
            {isOpen && (
                <ul className="movies-list">
                    {movies.map((movie) => (
                        <MovieItem
                            movie={movie}
                            onDeleteMovie={handleDeleteMovie}
                            key={movie.Title}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
