import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


export interface Genre {
    id: number;
    name: string; 
    slug : string;
    games_count: number,
    image_background: string,
}

interface GetGenreResponse {
    count: number,
    results: Genre[],
}


const useGenres = () => {

    const [ genres, setGenres ] = useState<Genre[]>([]);
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient.get<GetGenreResponse>('/genres', { signal: controller.signal })
            .then( res => {
                console.log( 'Res: ', res.data.results );
                setGenres( res.data.results);
                setIsLoading(false);
            }) 
            .catch( err => {
                if (err instanceof CanceledError) return;
                console.log('Error message: ', err.message);
                setError( err.message );
                setIsLoading(false);
            });

        return () => controller.abort();

    },[])

    return { genres, error, isLoading };
}

export default useGenres