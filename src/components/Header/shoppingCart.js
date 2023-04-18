import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const iconColor = grey[900];

export default function ShoppingCart() {
  return (
    <IconButton aria-label="cart" sx={{ mr: 2, ml: 3 }}>
      <StyledBadge badgeContent={4} color="success">
        <ShoppingCartIcon style={{ color: grey[900] }} />
      </StyledBadge>
    </IconButton>
  );
}
