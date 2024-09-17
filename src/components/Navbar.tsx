import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px' >
        <Image src={logo} boxSize={50} border={2}/>
        <Text>Navbar</Text>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar