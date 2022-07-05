import React from 'react';
import {Flex,Box,Spacer,Button} from "@chakra-ui/react"
import AuthButton from "./AuthButton";
import Search from "./Search"
import AuthModal from "../../Modal/Auth/AuthModal";
import {signOut} from 'firebase/auth'
import { auth } from '../../../firebase/client';
import Icons from "./Icons";
import UserMenu from './UserMenu';
import {User} from "firebase/auth";

type RightContentProps = {
    user?:User | null;
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return (
        <>
        <AuthModal></AuthModal>
        <Flex justify="center" align="center" gap='1'>
           {user ?  <Icons/> : <AuthButton/>}
           
           <UserMenu user={user}></UserMenu>

              <Search></Search> 
        </Flex>
        </>
    )
}
export default RightContent;