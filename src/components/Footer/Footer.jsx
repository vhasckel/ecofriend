import { Box, Typography, Container, styled } from "@mui/material";
import Paragraph from "../Paragraph/Paragraph";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  padding: 20,
}));

const Footer = () => {
  return (
    <BoxStyled component="footer">
      <Container maxWidth="lg">
        <Paragraph
          text={"© 2024 Recicla365. Todos os direitos reservados."}
        ></Paragraph>
      </Container>
    </BoxStyled>
  );
};

export default Footer;
