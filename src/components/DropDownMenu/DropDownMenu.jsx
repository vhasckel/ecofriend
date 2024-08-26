import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Box,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import useMenu from "../../hooks/useMenu";

const DropDownMenu = ({
  icon: IconComponent,
  menuItems,
  sxProps,
  buttonId = "composition-button",
  menuId = "composition-menu",
  ariaLabel = "menu button",
}) => {
  const theme = useTheme();
  const { open, anchorRef, handleToggle, handleClose, handleListKeyDown } =
    useMenu();

  return (
    <Box sx={sxProps}>
      <Button
        ref={anchorRef}
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          color: theme.palette.customColors.lightGreen,
          minWidth: "unset",
          padding: 0,
        }}
      >
        <IconComponent sx={{ fontSize: 40 }} />
      </Button>

      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id={menuId}
                  aria-labelledby={buttonId}
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default DropDownMenu;
