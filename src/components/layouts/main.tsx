"use client";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "@mui/material";

interface MainProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

const Main: React.FC<MainProps> = ({ children, sx, ...other }) => {
  return (
    <Container maxWidth="xl" component="main" {...other}>
      {children}
    </Container>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
