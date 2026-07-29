import {useEffect, useState} from 'react';
import styles from './App.module.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {MovieGrid} from '../MovieGrid/MovieGrid';
import {getMovies} from '../../services/movieService.ts';
import toast from 'react-hot-toast';
import type {Movie} from '../../types/movie';
import Loader from "../Loader/Loader.tsx";

function App() {
    const [data, setData] = useState<Movie[]>([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };

    useEffect(() => {
        if (!query) return;
        setLoading(true);
        const fetchData = async () => {

            try {
                const movies = await getMovies(query);
                setData(movies);
            } catch (error) {
                toast.error('Failed to fetch movies');
            }
            setLoading(false);
        };
        fetchData();
    }, [query]);

    return (
        <div className={styles.app}>
            <SearchBar onSearch={handleSearch}/>
            {loading ? <Loader/> : <MovieGrid movies={data}/>}
        </div>
    )
}

export default App
