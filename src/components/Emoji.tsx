import React from 'react'

import BullsEye from '../assets/bulls-eye.webp';
import Meh from '../assets/meh.webp'; 
import ThumbsUp from '../assets/thumbs-up.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Prop {
    rating: number
}


const Emoji = ({rating}: Prop) => {

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: Meh, alt:'meh', boxSize:'25px' }, 
        4: { src: ThumbsUp, alt:'recommended', boxSize:'20px'  }, 
        5: { src: BullsEye, alt:'excellent', boxSize:'25px'}, 
    }

    return (
        <Image { ...emojiMap[rating] }  />
    )
}

export default Emoji