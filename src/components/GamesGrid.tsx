import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
// import { Genre } from '../hooks/useGenres';
// import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';


interface Props {
    gameQuery: GameQuery;
}


const GamesGrid = ({ gameQuery }: Props) => {

    const { data: games, isLoading, error } = useGames( gameQuery );

    const dummySkeletons = [1,2,3,4,5,6];

    return (
        <>
            { error && <Text>{ error }</Text> }
             
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4 }} spacing={5} padding={'10px'} > 
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