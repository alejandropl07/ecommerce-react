import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo.png";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useSelector } from "react-redux";
import { Favorite } from "@mui/icons-material";

export default function Navbar() {
  const { favorites } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", backgroundColor: "whitesmoke" }}
      >
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                alt="eCommerce"
                style={{
                  marginRight: "1rem",
                  height: "3rem",
                }}
              />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ marginRight: "1rem" }}
          >
            Hello Guest
          </Typography>

          <Link to="/sign-in">
            <Button variant="outlined">
              <strong> "Sign Out" </strong>
            </Button>
          </Link>

          <Link to="/checkout-page">
            <IconButton
              aria-label="show-cart-items"
              color="inherit"
              sx={{ marginRight: "1rem" }}
            >
              <Badge badgeContent={favorites?.length} color="secondary">
                <Favorite fontSize="large" color="red" />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
