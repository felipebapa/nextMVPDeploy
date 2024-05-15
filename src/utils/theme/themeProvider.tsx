"use client";

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";

import { typography } from "./typography";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { overrides } from "./overrides";
import { customShadows } from "./custom-shadows";

// ----------------------------------------------------------------------
interface ThemeProviderPropTypes {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderPropTypes> = ({ children }) => {
  const memoizedValue: ThemeOptions = useMemo(
    () => ({
      palette: palette(),
      typography,
      //shadows: shadows(),
      //customShadows: customShadows(),
      //shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
