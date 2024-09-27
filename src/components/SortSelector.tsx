import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void,
    sortOrder: string | null,
}


const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: 'name', label: 'Name' },
        { value: '-added', label: 'Date Added' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];

    const currentSortOrder = sortOrders.find( order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} > 
                Order By: { currentSortOrder?.label || 'Relevance' }  
            </MenuButton>
            <MenuList>
                { sortOrders.map( order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.label} value={order.value}> { order.label } </MenuItem>) }
            </MenuList>
        </Menu>
    )
}


export default SortSelector