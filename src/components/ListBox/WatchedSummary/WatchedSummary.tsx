import './WatchedSummary.css';

import { WatchedSummaryType } from '../types';

export function WatchedSummary({ movies }: WatchedSummaryType) {
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
        <div className="summary">
            <h2>Movies you watched</h2>
            <div className="summary-info">
                <span>#️⃣ {movies.length} movies</span>
                <span>⭐️ {averageImdb}</span>
                <span>🌟 {averageUserRating}</span>
                <span>⏳ {averageRuntime}</span>
            </div>
        </div>
    );
}
