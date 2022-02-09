import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    attire: {
      1: '#ffffff',
      2: '#626365',
      3: '#929292',
      4: '#C7EDE4',
      5: '#000000',
    },
  },
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        background: 'purple.50',
        color: 'purple.900',
        overflowX: 'hidden',
      },
    },
  },
});

export default theme;
