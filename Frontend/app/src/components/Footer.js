import * as React from "react";
import * as ROUTES from "../constants/routes";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import './Body.css'

const pages = ["Sign in", "Sign up"];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Made with ♡ by "}
        Green Book Team
      
    </Typography>
  );
}

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#003300" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="footer">
          <Copyright color="white" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
