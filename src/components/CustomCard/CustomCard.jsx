import { Box, Card, CardContent, styled } from "@mui/material";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";

const CustomCard = ({ title, paragraph, isFunctionalities }) => {
  const CardStyled = styled(Card)(({ theme }) => ({
    backgroundColor: isFunctionalities
      ? theme.palette.customColors.lightGreen
      : "white",
    margin: "0 10px",
    boxShadow: isFunctionalities ? "none" : "",
  }));
  return (
    <Box sx={{ minWidth: 275 }}>
      <CardStyled>
        <CardContent>
          <Subtitle text={title} />
          <Paragraph text={paragraph} />
        </CardContent>
      </CardStyled>
    </Box>
  );
};

export default CustomCard;
