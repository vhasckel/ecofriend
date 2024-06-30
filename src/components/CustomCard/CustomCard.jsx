import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";
import theme from "../../theme/theme";

const CardStyled = styled(Card)(({ theme, isFunctionalities }) => ({
  backgroundColor: isFunctionalities
    ? theme.palette.customColors.lightGreen
    : theme.palette.customColors.cardGreen,
  marginRight: "10px",
  boxShadow: "none",
  textAlign: isFunctionalities ? "center" : "left",
  fontSize: isFunctionalities ? "24px" : "16px",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const CustomCard = ({ subtitle, paragraph, isFunctionalities, variant }) => (
  <Box sx={{ minWidth: 275 }}>
    <CardStyled isFunctionalities={isFunctionalities}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          color={theme.palette.primary.main}
        >
          {subtitle}
        </Typography>
        <Typography variant={variant} color={theme.palette.customColors.text}>
          {paragraph}
        </Typography>
      </CardContent>
    </CardStyled>
  </Box>
);

CustomCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  isFunctionalities: PropTypes.bool,
};

CustomCard.defaultProps = {
  isFunctionalities: false,
};

export default CustomCard;
