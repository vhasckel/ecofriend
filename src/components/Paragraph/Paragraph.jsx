import { Typography, styled } from "@mui/material";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.customColors.text,
  lineHeight: "22px",

  [theme.breakpoints.up("md")]: {
    fontSize: 30,
    maxWidth: "41ch",
    lineHeight: "30px",
  },
}));

const Paragraph = ({ text }) => {
  return <TypographyStyled>{text}</TypographyStyled>;
};

export default Paragraph;
