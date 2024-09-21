import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';


interface Props {
    selectedGenre: Genre | null,
}


const GamesGrid = ({ selectedGenre }: Props) => {

    const { data: games, isLoading, error } = useGames( selectedGenre );

    const dummySkeletons = [1,2,3,4,5,6];

    return (
        <>
            { error && <Text>{ error }</Text> }
             
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:5 }} spacing={'10px'} padding={'10px'} > 
                { isLoading && 
                    dummySkeletons.map( skelly => 
                        <GameCardContainer key={skelly}>
                            <GameCardSkeleton  />
                        </GameCardContainer>
                    )
                }
                { games.map( game =>   
                    <GameCardContainer key={ game.id }>                 
                        <GameCard  game={ game }/>
                    </GameCardContainer>
                )}
            </SimpleGrid> 
        </>   
    )
}

export default GamesGrid