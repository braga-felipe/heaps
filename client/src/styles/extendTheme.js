import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primaryActive: '#5D55B4',
    secondaryActive: '#DFB23F',
    primary: '#7A75B5',
    secondary: '#DEC073',
  },
  fonts: {
    heading: 'Sora',
    body: 'Roboto',
  },
  fontWeight: {},
});

export default customTheme;
