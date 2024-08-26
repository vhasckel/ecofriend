import {
  AppBar,
  Stack,
  Toolbar,
  Container,
  useTheme,
  Box,
} from "@mui/material";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.customColors.mediumGreen,
      }}
    >
      <Container disableGutters>
        <Toolbar>
          <Box
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <DropDownMenu
              icon={DragHandleIcon}
              menuItems={["Sobre", "Funcionalidades", "Contato"]}
              sxProps={{ display: { xs: "block", sm: "none" } }}
            />
            <MenuDesktop />

            {/* <Logo height={50} /> */}

            <DropDownMenu
              icon={AccountCircleRoundedIcon}
              menuItems={["Entrar", "Cadastrar"]}
              links={["/login", "/register"]}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
