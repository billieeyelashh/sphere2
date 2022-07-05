import React from 'react';
import { SearchIcon,PhoneIcon} from '@chakra-ui/icons';
import {Flex,
        Input,
        InputGroup,
        InputLeftElement, 
        Center
        } from "@chakra-ui/react";

type SearchProps = {
    // user:
};

const Search:React.FC<SearchProps> = () => {
    
    return (
    <Flex mr={2} align="center">
        <Center>
        <InputGroup>
            <Input placeholder='Search sphere'  fontSize ='11px' 
                   _placeholder={{ color: "gray.500"}}
                   _hover={{ bg: "gray.100",
                            border : "1px solid",
                            borderColor: "gray.400"        
                   }}      
                   />
        </InputGroup>
        </Center>
  </Flex>
    );
};
export default Search;