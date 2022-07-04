import React from 'react';
import { Menu,  MenuButton, Button, MenuList, MenuItem,Icon,Flex, MenuDivider,Text} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaRedhat} from 'react-icons/fa';
import FieldOfStudy from './FieldOfStudy';



const Directory:React.FC = () => {

    
    return(
    <Menu>
        <MenuButton mr ={2} ml={{base: 0, md: 2}} cursor='pointer' padding ='0px 6px' borderRadius={4} _hover={{outline: '1px solid', outlineColor: 'grey.200'}}>
        <Flex align="center" justify ='space-between' width={{base: "autho", lg: "200px"}}>
                    <Flex align ="center">
                        {/*<Icon as={FaRedhat} /> */}
                        <Text fontSize= '12'> Field of Study</Text>
                    </Flex>
            
               <ChevronDownIcon/>
            
        </Flex>
            
    </MenuButton>
    <MenuList>

         <FieldOfStudy/>
    </MenuList>
    </Menu>

    );
};
export default Directory;
