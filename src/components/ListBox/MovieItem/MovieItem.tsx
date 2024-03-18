import { MovieItemType } from '../types';

import './MovieItem.css';

export function MovieItem({ movie, onDeleteMovie }: MovieItemType) {
    const isWatchedMovies = 'runtime' in movie;

    return (
        <>
            <li className="movie">
                <img src={movie.Poster} alt="Poster" />
                <h3>{movie.Title}</h3>
                {/* Defining if movie is type of WatchedMovie or MovieData */}
                <div className="movie-info">
                    {isWatchedMovies ? (
                        <>
                            <p>⭐️ {movie.imdbRating}</p>
                            <p>🌟 {movie.userRating}</p>
                            <p>⏳ {movie.runtime}</p>
                        </>
                    ) : (
                        <p>📆 {movie.Year}</p>
                    )}
                    <button
                        className="delete-btn"
                        onClick={() => onDeleteMovie(movie)}
                    >
                        X
                    </button>
                </div>
            </li>
        </>
    );
}
