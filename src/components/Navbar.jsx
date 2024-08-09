import * as React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const pages = ["Store", "Docs", "Changelog", "What's New "];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className="nav-header">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              {/* Desktop */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      textTransform: "none",
                      fontSize: 18,
                      fontFamily: ["Inter", "sans-serif"],
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <div>
                  <svg
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <rect width="100" height="100" fill="transparent" />

                    <path
                      d="M50 10c-22 0-40 18-40 40 0 17.7 11.5 32.7 27.5 38 2 .3 2.5-1 2.5-2v-7c-10 2-12.5-4-12.5-4-2-5-5-6-5-6-4-2 .5-2 .5-2 5 0 7.5 5 7.5 5 4 7 10 5 12 4 1-3 4-5 5-6-8-1-16-4-16-17 0-4 1.5-8 4-10-1-2-2-5 1-10 0 0 4-1 10 4 3-1 7-1 10-1s7 1 10 1c6-5 10-4 10-4 3 5 2 8 1 10 2.5 2 4 6 4 10 0 13-8 16-16 17 1.5 1 3 4 3 7v9c0 1 0 2 2.5 2C78.5 82.7 90 67.7 90 50c0-22-18-40-40-40z"
                      fill="#181717"
                    />

                    <circle cx="80" cy="20" r="12" fill="#FFFFFF" />
                    <text
                      x="80"
                      y="25"
                      text-anchor="middle"
                      font-family="Arial"
                      font-size="10"
                      fill="#000000"
                    >
                      23k
                    </text>
                  </svg>
                  <Button
                    variant="outlined"
                    sx={{
                      transform: "translate(10px, -16px)",
                      borderColor: "#000",
                      color: "#000",
                      textTransform: "none",
                      fontSize: 18,
                      fontFamily: ["Inter", "sans-serif"],
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </Box>
            </Toolbar>
          </Container>
          <Divider component="AppBar" />
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {/* <Container></Container> */}
    </React.Fragment>
  );
}
