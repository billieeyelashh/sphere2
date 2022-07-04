import React from 'react';
import { Menu,  MenuButton, Button, MenuList, MenuItem,Icon,Flex, MenuDivider} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {User} from "firebase/auth";
import {BsFillDiamondFill} from 'react-icons/bs';
import {VscAccount } from "react-icons/vsc";
import {CgProfile} from "react-icons/cg";
import { MdOutlineLogin } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/client';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';


type UserMenuProps = {
    user?:User | null;
};



const UserMenu:React.FC<UserMenuProps> = ({user}) => {

    const setAuthModalState = useSetRecoilState(authModalState)

    
    return(
    <Menu>
        <MenuButton cursor='pointer' padding ='0px 6px' borderRadius={4} _hover={{outline: '1px solid', outlineColor: 'grey.200'}}>
        <Flex align="center">
                    <Flex align ="center">
            {user ? (
                        <>
                        <Icon fontSize={24} mr={1} color='gray.300' as={BsFillDiamondFill}/>
                        </>
                   
                 ) : (
                <Icon as={VscAccount} color ='grey' />
                )}
          </Flex>
                <ChevronDownIcon/>
        </Flex>
            
            
        
        </MenuButton>
        <MenuList>
            {user ? (
                <>
                <MenuItem
                fontSize = '10pt'
                _hover = {{ bg: "blue.500", color: "white"}}
            
                    >
                    <Flex align= 'center'>
                        <Icon fontSize ={24} as={CgProfile} />
                            Profile 
                    </Flex>
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem
                fontSize = '10pt'
                _hover = {{ bg: "blue.500", color: "white"}}
                onClick={() => signOut(auth)}
                    >
                    <Flex align= 'center'>
                        <Icon as={MdOutlineLogin} />
                           Log out
                    </Flex>
            </MenuItem>
                </>
                ) : (
                <>
                <MenuItem
                fontSize = '10pt'
                _hover = {{ bg: "blue.500", color: "white"}}
                onClick={() => setAuthModalState({ open: true, view: "login" })}
                    >
                    <Flex align= 'center'>
                        <Icon as={MdOutlineLogin} />
                           Log in / Sign up
                    </Flex>
            </MenuItem>
                </>
                )}
            
           
    </MenuList>
    </Menu>
    );
};
export default UserMenu;
