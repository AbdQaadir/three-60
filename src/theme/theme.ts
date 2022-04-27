import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    ...base.colors,

    blue: {
      50: "#f7fafc",
      // ...
      900: "#2468EB",
    },
    // ...
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Rubik, sans-serif",
  },
});

export default theme;
