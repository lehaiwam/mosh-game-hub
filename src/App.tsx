import React, { useState } from 'react';
import { Grid, GridItem, HStack, Show, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}

import './index.css';
import GameHeading from './components/GameHeading';


function App() {

  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery);
  // const [ sortOrder, setSortOrder] = useState<string | null>(null);

  return (
    <Grid  
        templateAreas={{
          base:'"nav" "main"',
          lg: '"nav nav" "aside main"'  
        }} 
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr' 
        }}
        gap={0.5}  
    >
      <GridItem area={"nav"} >
        <Navbar onSearch={ (searchText) => setGameQuery({ ...gameQuery, searchText }) }/>
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={4} >
          <GenreList selectedGenre={ gameQuery.genre } onSelectGenre={ (genre) => setGameQuery({ ...gameQuery, genre }) } />
        </GridItem> 
      </Show> 

      <GridItem area={"main"}>
        <Box paddingLeft={'10px'}>
          <GameHeading  gameQuery={gameQuery}/>
          <HStack spacing={3}  marginBottom={1} marginTop={1}>
            <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}  selectedPlatform={ gameQuery.platform } />
            <SortSelector onSelectSortOrder={ (sortOrder) => setGameQuery({ ...gameQuery, sortOrder }) } sortOrder={ gameQuery.sortOrder }/>
          </HStack>
        </Box>
        <GamesGrid gameQuery={ gameQuery } />
      </GridItem>

    </Grid>
  )
}

export default App
