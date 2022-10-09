import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Assets/Logo.png";

const drawerWidth = 240;
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      className="Navbar"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <img id="Nav-Logo" src={Logo} alt="Logo" />
      <Divider />

      <List>
        <ul>
          <li>
            <Link id="Nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="Nav" to="All">
              All projects
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Gallary">
              Gallary
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Sell">
              Land sell
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Carrier">
              Carrier opportunity
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link id="Nav" to="About">
              About us
            </Link>
          </li>
        </ul>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="Navbar" sx={{ display: "flex" }}>
      <AppBar className="Navbar" component="nav">
        <Toolbar className="Navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon id="Menu" />
          </IconButton>

          {/*Topbar start from here*/}
          <img id="Logo" src={Logo} alt="Logo" />
          <Box className="Navbar" sx={{ display: { xs: "none", sm: "block" } }}>
            <ul>
              <li>
                <Link id="Nav" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link id="Nav" to="All">
                  All projects
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Gallary">
                  Gallary
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Sell">
                  Land sell
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Carrier">
                  Carrier opportunity
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link id="Nav" to="About">
                  About us
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;
