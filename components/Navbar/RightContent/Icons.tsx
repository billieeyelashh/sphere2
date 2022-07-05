import React from 'react';
import { Flex,Box,Icon } from '@chakra-ui/react';
import {BsArrowUpRightCircle,BsChatDots} from 'react-icons/bs';
import {GrAdd} from "react-icons/gr";
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
} from 'react-icons/io5'


const Icons:React.FC = () => {
    
    return (
        <Flex>
            <Flex display={{ base: "none", md: "flex"}}
            align="center"
            borderRight='1px solid'
            borderColor = 'gray.200'
            >
                <Flex mr={1.5} ml={1.5} padding={1} cursor ='pointer' borderRadius={4} _hover ={{ bg: "gray.200"}}>
                   <Icon as={BsArrowUpRightCircle} />
                </Flex>
                <Flex mr={1.5} ml={1.5} padding={1} cursor ='pointer' borderRadius={4} _hover ={{ bg: "gray.200"}}>
                   <Icon as={IoFilterCircleOutline} />
                </Flex>

            
               
            </Flex>
            <Flex mr={1.5} ml={1.5} padding={1} cursor ='pointer' borderRadius={4} _hover ={{ bg: "gray.200"}}>
                   <Icon as={BsChatDots} />
                </Flex>
            <Flex mr={1.5} ml={1.5} padding={1} cursor ='pointer' borderRadius={4} _hover ={{ bg: "gray.200"}}>
                   <Icon as={IoNotificationsOutline} />
            </Flex>
            <Flex display = {{base: "none", md: "flex"}} mr={1.5} ml={1.5} padding={1} cursor ='pointer' borderRadius={4} _hover ={{ bg: "gray.200"}}>
                   <Icon as={GrAdd} />
            </Flex>

        </Flex>
    )
}
export default Icons;