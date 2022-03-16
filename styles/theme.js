import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {},
  styles: {
    global: {
      // styles for the `body`
      body: {
        fonts: {
          body: 'system-ui, sans-serif',
          heading: 'Nunito',
          mono: 'Menlo, monospace',
          color: 'gray.900',
        },
        bg: 'whiteAlpha.900',
        color: 'gray.900',
      },
    },
  },
});

export default theme;
