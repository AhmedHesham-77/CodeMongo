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

const pages = ["Sign in", "Sign up"];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const HandleClickToken = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('email');
    window.location = '/';
  }


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#003300" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ marginLeft: 2, marginRight: 2, flexGrow: 1 }}>
            <Link to={ROUTES.HOME}>
              <img
                src="https://i.suar.me/KXyXn/l"
                alt="Logo"
                style={{ height: 75, width: "auto" }}
              />
            </Link>
          </Box>

          {!!window.localStorage.getItem('email') ?
                <Button
                key={"Logout"}
                component={Link}
                to={ROUTES.HOME}
                sx={{
                  my: 2,
                  color: "white",
                  marginLeft: 2,
                  "&:hover": {
                    color: "lime",
                  },
                }}
                onClick={HandleClickToken}
                >
                {"Logout"}
              </Button>

              :
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === "Sign in" ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
                  sx={{
                    my: 2,
                    color: "white",
                    marginLeft: 2,
                    "&:hover": {
                      color: "lime",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          }



          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={page === "Sign in" ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;