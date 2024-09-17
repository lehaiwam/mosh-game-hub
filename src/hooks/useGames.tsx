import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game {
    id: number,
    name: string, 
}

interface GetGamesResponse {
    count: number,
    results: Game[],
}


const useGames = () => {

    const [ games, setGames ] = useState<Game[]>([]);
    const [ error, setError ] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<GetGamesResponse>('/games', { signal: controller.signal })
            .then( res => {
                console.log( 'Res: ', res.data.results );
                setGames( res.data.results)
            }) 
            .catch( err => {
                if (err instanceof CanceledError) return;
                console.log('Error message: ', err.message);
                setError( err.message )
            });

        return () => controller.abort();

    },[])

    return { games, error };
}

export default useGames