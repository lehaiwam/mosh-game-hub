import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/usePlatforms'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
    onSelectPlatform: (selectedPlatform: Platform | null) => void,
    selectedPlatform: Platform | null,
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data: platforms, isLoading, error} = usePlatforms();
    
    if (isLoading) return <Spinner />

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={ <BsChevronDown /> }> 
                { selectedPlatform?.name || 'Platorms' }   
            </MenuButton>
            <MenuList>
                { platforms.map( platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{ platform.name }</MenuItem>) }
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
