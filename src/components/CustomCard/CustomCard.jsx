import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";

import theme from "../../theme/theme";

const CardStyled = styled(Card)(({ theme, isFunctionalities }) => ({
  backgroundColor: isFunctionalities
    ? theme.palette.customColors.lightGreen
    : theme.palette.customColors.cardGreen,
  gap: "25px",
  boxShadow: "none",
  textAlign: isFunctionalities ? "center" : "left",
  fontSize: isFunctionalities ? "24px" : "16px",

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const CustomCard = ({ subtitle, paragraph, isFunctionalities, variant }) => (
  <Box m={1}>
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
