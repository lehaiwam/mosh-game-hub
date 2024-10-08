import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';

import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {

    const { id, name, background_image, parent_platforms, metacritic} = game;

    return (
        <Card>
            <Image src={ getCroppedImageUrl(background_image) }  border='1px' borderColor='gray.700' />
            <CardBody>
                <HStack>
                    <Heading fontSize={'1xl'}>{ name } </Heading>
                    <Emoji rating={game.rating_top}/>
                </HStack>

                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={ game.parent_platforms.map( p => p.platform ) }/>
                    <CriticScore score={ metacritic } />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard