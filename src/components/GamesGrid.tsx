import React, { useState, useEffect } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number,
    name: string, 
}


interface GetGamesResponse {
    count: number,
    results: Game[],
}


const GamesGrid = () => {

    const [ games, setGames ] = useState<Game[]>([]);
    const [ error, setError ] = useState('');

    useEffect(() => {
        apiClient.get<GetGamesResponse>('/games')
            .then( res => {
                console.log( 'Res: ', res.data.results );
                setGames( res.data.results)
            }) 
            .catch( err => {
                console.log('Error message: ', err.message);
                setError( err.message )
            });
    },[])

    /*
    const displayGames = games.map( game => {
        return (
            <li key={game.id} style={{paddingLeft: 16 }}>{ game.name}</li>
        )
    })
    */
   

    return (
        <>
            { error && <Text>{ error }</Text> }
            { games &&
                <ul> 
                    { games.map( game =>                    
                        <li key={game.id} style={ {paddingLeft: 16 }}>{ game.name}</li>
                    )}
                </ul>
            }
        </>   
    )
}

export default GamesGrid