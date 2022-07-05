import React, {useState} from 'react';
import {Input,Button,Text,Flex} from '@chakra-ui/react';
import {useSetRecoilState} from 'recoil';
import {authModalState} from '../../../atoms/authModalAtom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '../../../firebase/client';
import {FIREBASE_ERRORS} from '../../../firebase/errors'

type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
   
    const [singUpForm,setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [ error, setError ] = useState('');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    //firebase
    const onSubmit =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(error) setError('');
        if(singUpForm.password !== singUpForm.confirmPassword){
            setError("Please enter the same password");
            return;
        }

        // if passwords match
        createUserWithEmailAndPassword(singUpForm.email,singUpForm.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    return (
        <form onSubmit={onSubmit}>
            <Input required name ='email' placeholder = 'email' type = 'email' mb={2} onChange={onChange} _hover={{ bg: 'grey.200'}} bg="gray.50"/>
            <Input required name = 'password' placeholder ='password' type = 'password'  mb ={2}onChange={onChange} _hover={{ bg: 'grey.200'}} bg="gray.50"/>
            <Input required name = 'confirmPassword' placeholder ='confirm password' type = 'password'  mb ={2}onChange={onChange} _hover={{ bg: 'grey.200'}} bg="gray.50"/>
            
            <Text textAlign="center" mt={2} fontSize="10pt" color="red.500">
                {error ||
                    FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>

            <Button width = '100%' mt={2} mb={2} type = 'submit' isLoading={loading}> Sign up</Button>
            <Flex fontSize='9pt' justifyContent='center' >
                <Text mt={2}>Already have an acc?  </Text>
               <Text mt ={2} color="red.300" fontWeight={700} cursor = 'pointer' onClick={() => setAuthModalState(prev => ({
                     ...prev,
                     view: 'login'
               }))
               }
               > LOG IN </Text>
            </Flex>
        </form>

    )
}
export default SignUp;