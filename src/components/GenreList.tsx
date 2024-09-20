import React from 'react'
import useData from '../hooks/useData';

import useGenres, { Genre } from '../hooks/useGenres';
import { Text } from '@chakra-ui/react';

const GenreList = () => {

    const { data: genres } = useGenres();

    return (
        <ul>
        {
           genres.map( genre => (
                <li key={genre.id}>{ genre.name }</li>
           )) 
        }
        </ul>
    )
}

export default GenreList