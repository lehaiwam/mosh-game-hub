
import React from 'react';
import { Badge } from '@chakra-ui/react';


interface Props {
    score: number;
}


const CriticScore = ({ score}: Props) => {

    let scoreColor = score > 90 ? 'greenyellow' : score > 80 ? 'yellow' : 'red'
  return (
    <Badge color={ scoreColor } paddingX={ 1 } borderRadius={ 4 } fontSize={ 14 }>{ score }</Badge>
  )
}
export default CriticScore