import { Box, Container, Typography, styled } from "@mui/material";
import Paragraph from "../Paragraph/Paragraph";
import theme from "../../theme/theme";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  padding: 20,
}));

const Footer = () => {
  return (
    <BoxStyled component="footer">
      <Container maxWidth="lg">
        <Typography variant="subtitle1" color={theme.palette.customColors.text}>
          Desenvolvido por vhasckel
        </Typography>
      </Container>
    </BoxStyled>
  );
};

export default Footer;
