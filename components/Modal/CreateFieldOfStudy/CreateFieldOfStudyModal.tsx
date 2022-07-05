import React, {useState} from 'react';
import {Flex,Modal,ModalOverlay,Icon,ModalContent,ModalHeader,ModalBody,ModalFooter,ModalCloseButton,Stack,Button,Box,Text,Input, Checkbox} from "@chakra-ui/react"
import { BsOctagon } from 'react-icons/bs';
import {BsFillEyeFill,BsFillPersonFill} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';

type CreateFieldOfStudyModalProps = {
    open:boolean;
    handleClose: () => void;
    
};

const CreateFieldOfStudyModal:React.FC<CreateFieldOfStudyModalProps> = ({open,handleClose}) => {
    const [FieldOfStudyName,setFieldOfStudyName] = useState('');
    const [charsRemaining,setCharsRemaining] = useState(50);
    const [FieldOfStudyType, setFieldOfStudyType] = useState('public');

    const handleChange = (even: React.ChangeEvent<HTMLInputElement>) => {
        if (even.target.value.length > 50) return;

        setFieldOfStudyName(even.target.value);
        // calculate chars remaining
        setCharsRemaining(50 - even.target.value.length);
    };

    const onFieldOfStudyTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldOfStudyType(event.target.name);
    }

    return (
        <>
    
          <Modal isOpen={open} onClose={handleClose} size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader display = 'flex' flexDirection='column' fontSize={15} padding = {3}>Create A Field of Study </ModalHeader>
              <Box pl ={3} pr={3}>
              <ModalCloseButton />
              <ModalBody display= 'flex' flexDirection = 'column' padding = "10px 0px" >
                
                
                <Input placeholder="Specify name" value = {FieldOfStudyName} size = "sm" pl = "22px" onChange ={handleChange}></Input>
                
                <Text fontSize={9} color={charsRemaining === 0 ? "red.500" : "gray.500"}>{charsRemaining} Characters remaining</Text>
                <Box mt={4}  mb={4}>
                    <Text fontWeight={600} fontSize={15}> Type </Text>
                    {/* checkbox */}
                    <Stack spacing ={2}>
                        <Checkbox name = "public" isChecked={FieldOfStudyType === 'public'} onChange= {onFieldOfStudyTypeChange}>
                            <Flex align="center">
                                <Icon as={BsFillPersonFill} size="1.5em" color='gray.500' mr={2} />
                                <Text fontSize="10pt" mr ={1}> Public</Text>
                                <Text fontSize = '8pt' color ="gray.500">
                                    Anyone can view this field of study
                                </Text>
                            </Flex>
                        </Checkbox>
                        <Checkbox name = "restricted" isChecked={FieldOfStudyType === 'restricted'} onChange= {onFieldOfStudyTypeChange}>
                            <Flex align='center'>
                            <Icon as={BsFillEyeFill} size="1.5em" color = 'gray.500' mr= {2} />
                                <Text fontSize="10pt" mr ={1}> Restricted</Text>
                                <Text fontSize = '8pt' color ="gray.500">
                                    Only members can view this field of study
                                </Text>
                            </Flex>
                        </Checkbox>
                        <Checkbox name = "private" isChecked={FieldOfStudyType === 'private'} onChange= {onFieldOfStudyTypeChange}>
                            <Flex align="center">
                            <Icon as={HiLockClosed} size="1.5em" color='gray.500' mr ={2}/>
                                <Text fontSize="10pt" mr ={1}> Private</Text>
                                <Text fontSize = '8pt' color ="gray.500">
                                    Only your friends can see this field of study
                                </Text>
                            </Flex>
                        </Checkbox>
                    </Stack>
                </Box>
              </ModalBody>
              </Box>
    
              <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
                
                <Button bg="pink" _hover={{bg:'red.300'}} mr={3} onClick={handleClose}>
                  Close
                </Button>
                <Button bg="gray.300"_hover={{ bg: 'gray.400' }}>Create Field of Study</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
  

export default CreateFieldOfStudyModal;