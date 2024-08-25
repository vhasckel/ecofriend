import { Box, Container, Typography, styled } from "@mui/material";
import CustomShapeDividerFooter from "../CustomShapeDividerFooter/CustomShapeDividerFooter";
import Title from "../Title/Title";
import theme from "../../theme/theme";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  textAlign: "center",
  paddingBottom: "50px",
  paddingTop: "100px",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const Footer = () => {
  return (
    <BoxStyled component="footer">
      <Container>
        <CustomShapeDividerFooter />
        <Typography
          variant="subtitle1"
          color={theme.palette.customColors.text}
          lineHeight={1.2}
          mb={3}
        >
          Desenvolvido por vhasckel
        </Typography>
      </Container>
    </BoxStyled>
  );
};

export default Footer;
