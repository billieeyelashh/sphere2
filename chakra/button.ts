import { ComponentStyleConfig} from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "5px",
        
    },
    variants: {
        oauth: {
            height: "34px",
            border: "1px solid #e6e6e6",
            bordercolor: "gray.300",
            _hover: {
                bg: "gray.50",
            }
        }
    }

};