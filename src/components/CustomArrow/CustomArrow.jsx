const arrowStyles = {
  display: "block",
  background: "#b1b1b1",
  borderRadius: "50%",
  padding: "0px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
};

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, left: "1px" }}
      onClick={onClick}
    />
  );
};

export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, right: "1px" }}
      onClick={onClick}
    />
  );
};
