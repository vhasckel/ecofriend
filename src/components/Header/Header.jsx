import {
  AppBar,
  Stack,
  Toolbar,
  Container,
  useTheme,
  Box,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import Logo from "../../assets/logo.png";
import MenuMobile from "../MenuMobile/MenuMobile";
import MenuDesktop from "../MenuDesktop/MenuDesktop";

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
            <MenuMobile />
            <MenuDesktop />

            {/* <Logo height={50} /> */}

            <AccountCircleRoundedIcon
              sx={{
                fontSize: 40,
                color: theme.palette.customColors.lightGreen,
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
