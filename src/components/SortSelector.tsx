import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';


import usePlatforms from '../hooks/usePlatforms';


const SortSelector = () => {

    const { data: platforms, isLoading, error} = usePlatforms();
    
    if (isLoading) return <Spinner />

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={ <BsChevronDown /> }> 
                Order By: Relevance  
            </MenuButton>
            <MenuList>
                <MenuItem> Relevance </MenuItem>
                <MenuItem> Date Added </MenuItem>
                <MenuItem> Name </MenuItem>
                <MenuItem> Release Date </MenuItem>
                <MenuItem> Popularity </MenuItem>
                <MenuItem> Average Rating </MenuItem>
            </MenuList>
        </Menu>
    )
}


export default SortSelector