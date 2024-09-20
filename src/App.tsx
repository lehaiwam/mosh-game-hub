import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';

function App() {

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
          <GenreList />
        </GridItem>
      </Show> 
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  )

}

export default App
