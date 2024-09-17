import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GamesGrid from './components/GamesGrid';

function App() {

  return (
    <Grid  
        templateAreas={{
          base:'"nav" "main"',
          lg: '"nav nav" "aside main"'  
        }} 
        gap={0.5}  
    >
      <GridItem area={"nav"} >
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}  >Aside</GridItem>
      </Show> 
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  )

}

export default App
