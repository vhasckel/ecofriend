import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  padding: "50px 20px 20px 20px",
  textAlign: "center",
}));

const Hero = () => {
  return (
    <BoxStyled>
      <Title text={"Recicla365: gerencie e recicle de forma inteligente"} />

      <Paragraph
        text={
          "Encontre pontos de coleta, registre suas contribuições e ajude o meio ambiente com facilidade."
        }
      />

      <CustomButton text={"Começar"} />
    </BoxStyled>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hero;
