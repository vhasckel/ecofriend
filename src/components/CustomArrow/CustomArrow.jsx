import { Box, styled } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PropTypes from "prop-types";

import theme from "../../theme/theme";

const BoxStyled = styled(Box)(({ isLeft }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  padding: "10px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  left: isLeft ? "1px" : "unset",
  right: isLeft ? "unset" : "12px",
}));

const ArrowIcon = ({ IconComponent, isLeft, ...rest }) => (
  <BoxStyled isLeft={isLeft}>
    <IconComponent
      sx={{
        fontSize: 42,
        color: theme.palette.primary.main,
      }}
      {...rest}
    />
  </BoxStyled>
);

ArrowIcon.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  isLeft: PropTypes.bool,
};

export const PrevArrow = (props) => (
  <ArrowIcon IconComponent={ArrowBackIosRoundedIcon} isLeft={true} {...props} />
);

export const NextArrow = (props) => (
  <ArrowIcon
    IconComponent={ArrowForwardIosRoundedIcon}
    isLeft={false}
    {...props}
  />
);

PrevArrow.propTypes = {
  slideCount: PropTypes.number,
  currentSlide: PropTypes.number,
};

NextArrow.propTypes = {
  slideCount: PropTypes.number,
  currentSlide: PropTypes.number,
};
