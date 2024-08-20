import { Box, Button } from "@mui/material";

const MenuDesktop = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button variant="menuButton">Sobre</Button>
      <Button variant="menuButton">Funcionalidades</Button>
      <Button variant="menuButton">Contato</Button>
    </Box>
  );
};

export default MenuDesktop;
