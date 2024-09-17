import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GamesGrid = () => {

    const {games, error} = useGames();

    return (
        <>
            { error && <Text>{ error }</Text> }
            { games &&
                <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:5 }} spacing={'10px'} padding={'10px'} > 
                    { games.map( game =>                    
                        <GameCard key={game.id} game={game} />
                    )}
                </SimpleGrid>
            }
        </>   
    )
}

export default GamesGrid