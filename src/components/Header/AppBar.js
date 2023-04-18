// React
import React, { useState } from "react";

// Custom Components
import UserAccount from "./userAccount";
import SearchAppBar from "./search";
import ColorBadge from "./shoppingCart";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const HeaderAppBar = () => {
  const [auth, setAuth] = useState(true);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#fafafa", position: "static", color: "#212121" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Cart
          </Typography>
          {auth ? (
            <React.Fragment>
              <SearchAppBar />
              <ColorBadge />
              <UserAccount />
            </React.Fragment>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAppBar;
