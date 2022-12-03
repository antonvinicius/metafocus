import { extendTheme } from "native-base";

export const theme = {
  fonts: {
    bold: "Roboto-Bold",
    medium: "Roboto-Medium",
    regular: "Roboto-Regular",
  },
  colors: {
    primary: "#38B387",
  },
};

export const nativeBaseTheme = extendTheme({
  colors: {
    primary: {
      50: "##F4FBF8",
      100: "#DBF1E9",
      200: "#BFE7D8",
      300: "#A0DBC6",
      400: "#75CAAB",
      500: "#39B388",
      600: "#2E9470",
      700: "#1F644C",
      800: "#164736",
      900: "#0E2C21",
    },
    fonts: {
      heading: "Roboto-Bold",
      body: "Roboto-Regular",
      mono: "Roboto-Medium",
    },
  },
});
