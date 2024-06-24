import { Typography, styled } from "@mui/material";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Title = ({ text }) => {
  return (
    <TypographyStyled variant="h4" component="h1">
      {text}
    </TypographyStyled>
  );
};

export default Title;
