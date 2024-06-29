import { Box, styled } from "@mui/material";
import Slider from "react-slick";
import SliderWrapper from "../../utils/_SlickSliderStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../../assets/ecology.png";
import { cardContents, userComments } from "../../utils/cardContents";
import {
  functionalitiesSettings,
  userCommentsSettings,
} from "../../utils/sliderSetings";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomCard from "../../components/CustomCard/CustomCard";
import Footer from "../../components/Footer/Footer";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.lightGreen,
  flexDirection: "column",
  padding: 20,
  textAlign: "center",
}));

const LandingPage = () => {
  return (
    <Box>
      <Hero />

      <BoxStyled>
        <img src={Image} alt="" style={{ width: "100%" }} />
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

        <SliderWrapper>
          <Slider {...functionalitiesSettings}>
            {cardContents.map((content, index) => (
              <CustomCard
                key={index}
                title={content.title}
                paragraph={content.paragraph}
                isFunctionalities={true}
              />
            ))}
          </Slider>
        </SliderWrapper>
      </BoxStyled>

      <BoxStyled>
        <Slider {...userCommentsSettings}>
          {userComments.map((content, index) => (
            <CustomCard
              key={index}
              title={content.name}
              paragraph={content.text}
            />
          ))}
        </Slider>
      </BoxStyled>
      <Footer />
    </Box>
  );
};

export default LandingPage;
