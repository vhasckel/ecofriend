import { Box, Container, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";
import theme from "../../theme/theme";
import Title from "../Title/Title";
import CustomShapeDivider from "../CustomShapeDivider/CustomShapeDivider";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  paddingBottom: "50px",
  textAlign: "center",
  position: "relative",
  paddingTop: "50px",

  [theme.breakpoints.up("sm")]: {
    paddingBottom: "150px",
    textAlign: "left",
  },
}));

const Hero = () => {
  return (
    <BoxStyled>
      <Container>
        <Box maxWidth={650}>
          <Title text={"Ecofriend: gerencie e recicle de forma inteligente"} />

          <Typography
            variant="h6"
            color={theme.palette.customColors.text}
            lineHeight={1.2}
            mb={3}
          >
            Encontre pontos de coleta, registre suas contribuições e ajude o
            meio ambiente com facilidade.
          </Typography>

          <CustomButton text={"Começar"} />
        </Box>
        <CustomShapeDivider />
      </Container>
    </BoxStyled>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hero;
