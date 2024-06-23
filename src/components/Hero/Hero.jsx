import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  padding: 20,
  "& h1": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  "& p": {
    marginBottom: theme.spacing(2),
    color: theme.palette.customColors.lightGreen,
  },
}));

const Hero = () => {
  return (
    <BoxStyled>
      <Typography variant="h4" component="h1">
        Recicla365: gerencie e recicle de forma inteligente
      </Typography>

      <Typography variant="body1">
        Encontre pontos de coleta, registre suas contribuições e ajude o meio
        ambiente com facilidade.
      </Typography>
      <CustomButton text={"Começar"} />
    </BoxStyled>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hero;
