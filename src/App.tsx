import React, { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={4} >
          <GenreList selectedGenre={selectedGenre} onSelectGenre={ (genre) => setSelectedGenre(genre) }/>
        </GridItem>
      </Show> 

      <GridItem area={"main"}>
        <PlatformSelector onSelectPlatform={ (platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform} />
        <GamesGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>

    </Grid>
  )
}

export default App
