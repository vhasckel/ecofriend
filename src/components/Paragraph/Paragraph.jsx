import { Typography, styled } from "@mui/material";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.customColors.text,
}));

const Paragraph = ({ text }) => {
  return <TypographyStyled>{text}</TypographyStyled>;
};

export default Paragraph;
