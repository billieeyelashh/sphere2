import {Flex,Image,Text,Spacer} from "@chakra-ui/react";
import React from 'react';
import RightContent from "./RightContent/RightContent";
import {auth} from "../../firebase/client";
import { useAuthState } from "react-firebase-hooks/auth";
import  Directory from "./Directory/Directory";

const Navbar:React.FC = () => {
    const [user,loading,error] = useAuthState(auth);
    return (
        <Flex bg="white">
            <Flex align="center">
                <Image src="images/alogo-2.svg" alt="logo" width="100px"/>
                <Text fontWeight='1000' 
                      fontSize='25px'
                      display={{base: "none", md: "unset"}}
                      >
                    Sphere
                </Text>
            </Flex> 
            <Spacer> </Spacer>
            <Directory></Directory>
            <RightContent user={user}></RightContent>
            
        </Flex>
    );
};
export default Navbar;