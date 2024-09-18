/**
 * This component was build to remove the duplication of styles in GameCard and GameCardSkeleton, as these two  components share common 
 * styling.
 */
import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    children: ReactNode,
}

const GameCardContainer = ({ children }: Props) => {

    return (
        <Box width={'300px'} minHeight={'240px'} borderRadius={ 10 }  overflow={'hidden'}>
            { children }
        </Box>
    )
} 

export default GameCardContainer