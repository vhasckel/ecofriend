import { Box, Typography, Container, styled } from "@mui/material";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  padding: 20,
}));

const Footer = () => {
  return (
    <BoxStyled component="footer">
      <Container maxWidth="lg">
        <Typography variant="body1">
          © 2024 Recicla365. Todos os direitos reservados.
        </Typography>
      </Container>
    </BoxStyled>
  );
};

export default Footer;
