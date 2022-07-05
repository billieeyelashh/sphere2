import React, {useState} from 'react';
import CreateFieldOfStudyModal from "../../Modal/CreateFieldOfStudy/CreateFieldOfStudyModal";
import { MenuItem,Flex,Icon,Text } from '@chakra-ui/react';
import {GrAdd} from 'react-icons/gr'

type FieldOfStudyProps = {
    
};

const FieldOfStudy:React.FC<FieldOfStudyProps> = () => {
    const [open,setOpen] = useState(false);
    
    return (
        <>
        <CreateFieldOfStudyModal open={open} handleClose={() => setOpen(false)}/>
            <MenuItem
                onClick={() => setOpen(true)}
                >
                <Flex align= 'center'>
                    <Icon as={GrAdd} fontSize={12}/>
                    <Text fontSize={12}>Create Field of Study</Text>
                   
                </Flex>
            </MenuItem>
        </>
        
    )
}
export default FieldOfStudy;