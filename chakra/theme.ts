import {extendTheme} from '@chakra-ui/react';
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import {Button} from './button'


export const theme = extendTheme({
    colors: {
        brand: {
           100: '#fefefe',

        },
    },
    fonts: {
        body: "OPen Sans, sans-serif",
    },
    styles: {
        global: () => ({
            body: {
                bg: "gray.200",
            },
        }),
    },
    components: {
        Button,
        
    }
})