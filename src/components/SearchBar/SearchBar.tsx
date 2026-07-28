import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

export interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.error('Please enter your search query.');
            return;
        }
        onSearch(query);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        name="query"
                        onChange={(e) => setQuery(e.target.value)}
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button type="submit" className={styles.button}>Search</button>
                </form>
            </div>
        </header>
    );
};
