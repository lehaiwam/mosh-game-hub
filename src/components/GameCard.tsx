import React from 'react'

import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {

    const { id, name, background_image } = game;

    return (
        <Card>
            <Image src={ background_image } borderRadius={ 10 }/>
            <CardBody>
                <Heading fontSize={'2xl'}>{ name }</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard