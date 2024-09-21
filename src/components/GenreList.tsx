import React from 'react'
import useData from '../hooks/useData';

import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';


interface Props {
    onSelectGenre:  ( genre: Genre ) => void,
    selectedGenre: Genre | null,
} 
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {

    const { data: genres, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />

    return (
        <List>
            {
            genres.map( genre => (
                    <ListItem key={ genre.id } mb={3}>
                        <HStack gap={2}>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={6}/>
                            <Button 
                                fontWeight={ genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                color={ genre.id === selectedGenre?.id ? 'greenyellow' : 'normal'}
                                onClick={() => onSelectGenre(genre)} 
                                variant={'link'} >
                                    { genre.name } 
                            </Button>
                        </HStack>
                    </ListItem>
            )) 
            }
        </List>
    )

}

export default GenreList