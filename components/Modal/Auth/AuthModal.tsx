import React, { useEffect } from 'react';
import { useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Flex,Text} from '@chakra-ui/react';
import { authModalState } from '../../../atoms/authModalAtom';
import {useRecoilState} from 'recoil';
import {useAuthState} from 'react-firebase-hooks/auth';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import {auth} from '../../../firebase/client';
import ResetPassword from './ResetPassword';

const AuthModal:React.FC = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
      const[modalState,setModalState] = useRecoilState(authModalState);
      const[user,loading,error] = useAuthState(auth);

      const handleClose = () => {
        setModalState((prev) => ({
          ...prev,
          open: false
        }));
      };
      const toggleView = (view: string) => {
        setModalState({
          ...modalState,
          view: view as typeof modalState.view,
        });
      };

      useEffect(() => {
        if(user) handleClose();
        console.log("user",user);
      },[user]);

    return (
      <>  
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" fontWeight={1000}>
              {modalState.view === 'login' && 'Login'}
              {modalState.view === 'signup' && 'Sign up'}
              {modalState.view === 'resetPassword' && 'Reset Password'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display ="flex" flexDirection ="column" alignItems="center" justifyContent="center" pb ={6}>
              <Flex direction="column" alignItems="center" justifyContent="center" width='70%'>
                {modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                
                <OAuthButtons />
                <Text fontWeight='300' color='grey.500'>
                  OR
                </Text>
                <AuthInputs />
                </>
                ) : (
                <ResetPassword toggleView={toggleView}/>
                )}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
};
export default AuthModal;
