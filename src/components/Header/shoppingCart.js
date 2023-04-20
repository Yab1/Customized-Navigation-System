import React, { useState, cloneElement } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

export default function ShoppingCart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const open = Boolean(anchorEl);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="cart"
      >
        <StyledBadge badgeContent={4} color="success">
          <ShoppingCartIcon style={{ color: grey[900] }} />
        </StyledBadge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <List dense={dense}>
          {generate(
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          )}
        </List>
      </Menu>
    </React.Fragment>
  );
}
