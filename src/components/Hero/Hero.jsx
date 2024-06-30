import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mediumGreen,
  flexDirection: "column",
  paddingBottom: "50px",
  textAlign: "center",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    paddingBottom: "150px",
    textAlign: "left",
  },
}));

const BoxCustomShapeDivider = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  transform: "rotate(180deg)",

  "& svg": {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "100px",

    [theme.breakpoints.down("sm")]: {
      width: "calc(140% + 1.3px)",
      height: "51px",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(100% + 1.3px)",
      height: "80px",
    },
  },

  "& .shapefill": {
    fill: theme.palette.customColors.lightGreen,
  },
}));

const Hero = () => {
  return (
    <BoxStyled>
      <Container>
        <Title text={"Recicla365: gerencie e recicle de forma inteligente"} />

        <Paragraph
          text={
            "Encontre pontos de coleta, registre suas contribuições e ajude o meio ambiente com facilidade."
          }
        />

        <CustomButton text={"Começar"} />
        <BoxCustomShapeDivider>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shapefill"
            ></path>
          </svg>
        </BoxCustomShapeDivider>
      </Container>
    </BoxStyled>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hero;
