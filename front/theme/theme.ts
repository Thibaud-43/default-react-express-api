import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#056155",
    },
    secondary: {
      main: "#E33E7F",
    },
  },
});

export default theme;
