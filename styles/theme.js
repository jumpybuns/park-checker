import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {},
  colors: {
    darkBlue: '#12224e',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Noto Sans',
  },
  styles: {
    global: {
      bg: 'whiteAlpha.900',
      color: 'gray.900',
    },
  },
  textStyles: {
    h1: {
      fontSize: ['4xl'],
      fontWeight: 'bold',
      lineHeight: '110%',
    },
  },
});

export default theme;
