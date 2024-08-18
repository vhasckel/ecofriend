import { Typography, styled } from "@mui/material";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme, fontSize }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.customColors.text,
  fontSize: fontSize || "16px",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "41ch",
  },
}));

const Paragraph = ({ text, fontSize }) => {
  return <TypographyStyled fontSize={fontSize}>{text}</TypographyStyled>;
};

export default Paragraph;
