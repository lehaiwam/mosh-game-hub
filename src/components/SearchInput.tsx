import React, { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';


interface Props {
    onSearch: (searchString: string) => void;
}


const SearchInput = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    const handleFormSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        console.log( ref.current?.value  );
        if (ref.current) {
            onSearch( ref.current.value );
        }   
    }


    return (
        <form onSubmit={ (e) => handleFormSubmit(e) }>
            <InputGroup>
                <InputLeftElement paddingLeft={2} children={ <BsSearch /> }/>
                <Input ref={ ref } borderRadius={ 20 }  backgroundColor={ 'gray.650' } variant='filled' placeholder='Search games...'/>
            </InputGroup>
        </form>
        
    )
}

export default SearchInput