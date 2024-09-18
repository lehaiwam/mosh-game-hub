import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {

    const { id, name, background_image, parent_platforms } = game;

    return (
        <Card>
            <Image src={ background_image } borderRadius={ 10 }/>
            <CardBody>
                <Heading fontSize={'2xl'}>{ name }</Heading>
                <PlatformIconList platforms={ game.parent_platforms.map( p => p.platform ) }/>
            </CardBody>
        </Card>
    )
}

export default GameCard