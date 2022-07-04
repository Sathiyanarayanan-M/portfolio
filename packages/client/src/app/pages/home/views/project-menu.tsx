import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const ProjectMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const showMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Mui.IconButton onClick={handleClick}>
        <MuiIcons.MoreHoriz />
      </Mui.IconButton>
      <Mui.Menu anchorEl={anchorEl} open={showMenu} onClose={handleClose}>
        <Mui.List>
          <Mui.ListItem>adsfasd</Mui.ListItem>
        </Mui.List>
      </Mui.Menu>
    </>
  );
};
