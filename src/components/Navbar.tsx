import { Box, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchString: string | null) =>  void;
}


const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding='12px' gap={4}>
      <Image src={logo} boxSize={50} border={2}/>
      <SearchInput onSearch={ onSearch }/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar