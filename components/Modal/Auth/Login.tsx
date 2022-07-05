import React, {useState} from 'react';
import {Input,Button,Text,Flex} from '@chakra-ui/react';
import {useSetRecoilState} from 'recoil';
import {authModalState} from '../../../atoms/authModalAtom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '../../../firebase/client';
import {FIREBASE_ERRORS} from '../../../firebase/errors'


type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
   const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm,setLoginForm] = useState({
        email: '',
        password: ''
    });
    const [siginInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    
    //firebase
    const onSubmit =(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        siginInWithEmailAndPassword(loginForm.email,loginForm.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
            <Input required name ='email' placeholder = 'email' type = 'email' mb={2} onChange={onChange} _hover={{ bg: 'grey.200'}} bg="gray.50"/>
            <Input required name = 'password' placeholder ='password' type = 'password'  mb ={2}onChange={onChange} _hover={{ bg: 'grey.200'}} bg="gray.50"/>
            <Text textAlign="center" mt={2} fontSize="10pt" color="red">
            {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Button mt={2} mb={2} width = '100%' type = 'submit' isLoading={loading}> Login</Button>
            <Flex justifyContent="center" mb={2}>
            <Text fontSize="9pt" mr={1}>
            Forgot your password?
            </Text>
            <Text
            fontSize="9pt"
            color="red.300"
            cursor="pointer"
            onClick={() => 
                setAuthModalState(prev => ({
                    ...prev,
                    view: 'resetPassword'
                }))
            }
            >
                Reset
                </Text>
            </Flex>
            <Flex fontSize='9pt' justifyContent='center'>
                <Text mt={2}>New here?  </Text>
               <Text mt = {2} color="red.300" fontWeight={700} cursor = 'pointer' onClick={() => setAuthModalState(prev => ({
                     ...prev,
                     view: 'signup'
               }))
               }
               > SIGN UP</Text>
            </Flex>
        </form>

    )
}
export default Login;