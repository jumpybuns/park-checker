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
          color: 'blackAlpha.400',
        },
        ListItem: {
          textColor: 'pink.500',
        },
        bg: 'gray.500',
        color: '#FAFAFA',
      },
    },
  },
});

export default theme;
