import React from 'react';
import type {Movie} from '../../types/movie';
import styles from './MovieGrid.module.css';

export interface MovieGridProps {
  movies: Movie[];
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.card}>
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
            loading="lazy"
          />
          <h3 className={styles.title}>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
};
