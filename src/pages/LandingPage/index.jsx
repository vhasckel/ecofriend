import { Box, styled } from "@mui/material";

import { cardContents } from "../../utils/cardContents";
import Hero from "../../components/Hero/Hero";
import LeafImage from "../../assets/leaf.png";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomCard from "../../components/CustomCard/CustomCard";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.lightGreen,
  flexDirection: "column",
  padding: 20,
}));

const LandingPage = () => {
  return (
    <Box>
      <Hero />

      <BoxStyled>
        <img src={LeafImage} alt="" style={{ width: "100%" }} />

        <Title text={"Nossa Missão"} />

        <Paragraph
          text={
            "O Recicla365 é uma plataforma inovadora criada para facilitar o gerenciamento de resíduos e a localização de pontos de coleta de materiais recicláveis. Nossa missão é tornar a reciclagem mais acessível e prática para todos, promovendo um ambiente mais sustentável."
          }
        />
        <CustomButton text={"Quero saber mais!"} />
      </BoxStyled>

      <BoxStyled>
        <Title text={"Como funciona?"} />

        <Box>
          {cardContents.map((content, index) => (
            <CustomCard
              key={index}
              title={content.title}
              paragraph={content.paragraph}
            />
          ))}
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default LandingPage;
