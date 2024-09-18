import React from 'react'
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';

import { 
    FaWindows, 
    FaXbox, 
    FaPlaystation, 
    FaApple, 
    FaLinux, 
    FaAndroid 
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendogamecube } from 'react-icons/si';
import { BsGlobe } from "react-icons/bs";
import { IconType } from 'react-icons';


interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconSlugMap: { [key: string] : IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendogamecube,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }

  return (
    <HStack mt={1}>
        {
            platforms.map( ( platform ) => <Icon as={ iconSlugMap[platform.slug] } color={'gray.500'}/> )
        }
    </HStack>
  )
}

export default PlatformIconList