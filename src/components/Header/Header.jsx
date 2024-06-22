import { AppBar, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import Logo from "../../assets/logo.png";
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: theme.palette.customColors.mediumGreen,
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent={matches ? "space-between" : "center"}
          alignItems="center"
          spacing={2}
          width="100%"
        >
          <MenuMobile />

          <img src={Logo} alt="Logo" style={{ height: 32 }} />

          <AccountCircleRoundedIcon sx={{ fontSize: 40 }} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
