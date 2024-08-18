import { Typography, styled } from "@mui/material";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Subtitle = ({ text }) => {
  return (
    <TypographyStyled variant="h5" component="h2">
      {text}
    </TypographyStyled>
  );
};

export default Subtitle;
