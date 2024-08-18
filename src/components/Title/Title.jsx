import { Typography, styled } from "@mui/material";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  fontSize: theme.typography.h1.fontSize,
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: 52,
    maxWidth: "20ch",
    textAlign: "left",
  },
}));

const Title = ({ text }) => {
  return (
    <TypographyStyled variant="h4" component="h1">
      {text}
    </TypographyStyled>
  );
};

export default Title;
