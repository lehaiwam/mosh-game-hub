import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GamesGrid = () => {
    
    const {games, error} = useGames();

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