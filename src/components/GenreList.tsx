import React from 'react'
import useData from '../hooks/useData';

import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';


interface Props {
    onSelectGenre: (genre: Genre) => void,
}


const GenreList = ({ onSelectGenre}: Props) => {
    
    const { data: genres, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />

    return (
        <List>
            {
            genres.map( genre => (
                    <ListItem key={genre.id} mb={3}>
                        <HStack gap={2}>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={6}/>
                            <Button onClick={() => onSelectGenre(genre)} variant={'link'}>{genre.name }</Button>
                        </HStack>
                    </ListItem>
            )) 
            }
        </List>
    )

}

export default GenreList