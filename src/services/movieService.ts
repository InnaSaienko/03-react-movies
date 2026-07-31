import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
});

export const getMovies = async (query: string, { signal }: { signal?: AbortSignal } = {}): Promise<any[]> => {
    const response = await api.get('/search/movie', {
        params: {
            query: query
        },
        signal
    });
    return response.data.results || [];
};