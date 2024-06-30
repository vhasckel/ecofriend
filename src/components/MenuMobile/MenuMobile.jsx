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
import DragHandleIcon from "@mui/icons-material/DragHandle";

import useMenu from "../../hooks/useMenu";

const MenuMobile = () => {
  const { open, anchorRef, handleToggle, handleClose, handleListKeyDown } =
    useMenu();

  return (
    <Box>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={(theme) => ({
          color: theme.palette.customColors.lightGreen,
        })}
      >
        <DragHandleIcon sx={{ fontSize: 40 }} />
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
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Sobre</MenuItem>
                  <MenuItem onClick={handleClose}>Funcionalidades</MenuItem>
                  <MenuItem onClick={handleClose}>Contato</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default MenuMobile;
