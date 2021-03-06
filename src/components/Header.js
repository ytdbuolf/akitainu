import React, { Fragment, useState, useContext } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Link,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { useHistory } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext } from "..";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// import LogoImage from '../assets/images/logo.png';
import TelegramImage from "../assets/images/telegramapp.svg";
import TwitterImage from "../assets/images/twitterico.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "14px 0",
    backgroundColor: "transparent!important",
    boxShadow: "none!important",
  },
  menuButton: {
    display: "block!important",
    color: `${theme.palette.text.primary} !important`,
    fontSize: "18px!important",
    fontWeight: "400!important",
    textTransform: "capitalize!important",
  },
  mobileListItem: {
    fontSize: "20px!important",
    color: `${theme.palette.text.primary} !important`,
    textDecoration: "none",
    textTransform: "capitalize!important",
    marginBottom: "8px!important",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  // const history = useHistory();
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          padding: "14px 0",
          backgroundImage: theme.palette.mode === "dark" ? "linear-gradient(180deg, #393939, #0b0a0f)" : "linear-gradient(180deg, #f5f5f5, #dddddd)",
          boxShadow: "none",
          height: { xs: 84, sm: 96 },
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
            {/* <Box
              component="img"
              src={LogoImage}
              alt=""
              sx={{ width: { xs: 120, sm: 140, md: 160, xl: 180 } }}
          /> */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "none",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  "@media (min-width: 1024px)": {
                    display: "flex",
                  },
                }}
              >
                <Button
                  className={classes.menuButton}
                  sx={{ mr: { md: "10px", lg: "24px" } }}
                  // onClick={() => history.push('/home')}
                  href="/"
                >
                  Home
                </Button>
                <Button
                  className={classes.menuButton}
                  sx={{ mr: { md: "10px", lg: "24px" } }}
                  // onClick={() => history.push('/#about')}
                  href="#about"
                >
                  About
                </Button>
                <Button
                  className={classes.menuButton}
                  sx={{ mr: { md: "10px", lg: "24px" } }}
                  // onClick={() => history.push('/#tokenmetrics')}
                  href="#tokenmetrics"
                >
                  Tokenmetrics
                </Button>
              </Box>
              <Box>
                <IconButton
                  sx={{ mr: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon sx={{ color: 'text.primary' }} />
                  ) : (
                    <Brightness4Icon sx={{ color: 'text.primary' }} />
                  )}
                </IconButton>
                <Button
                  href="https://twitter.com/AKITA_network"
                  target="_blank"
                >
                  <Box
                    component="img"
                    src={TwitterImage}
                    alt=""
                    sx={{ width: { xs: 48 } }}
                  />
                </Button>
                <Button href="https://t.me/akitatoken" target="_blank">
                  <Box
                    component="img"
                    src={TelegramImage}
                    alt=""
                    sx={{ width: { xs: 48 } }}
                  />
                </Button>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={() => setMobileDrawer(true)}
                sx={{
                  display: "inline-flex",
                  color: "text.primary",
                  "@media (min-width: 1024px)": {
                    display: "none",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          overflow: "auto",
          backgroundColor: "background.paper",
          minWidth: 280,
          padding: { xs: "24px 16px", sm: "24px" },
          zIndex: 2000,
          transition: "transform 0.3s",
          transform: mobileDrawer ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            py: { xs: "2px", sm: "10px" },
          }}
        >
          <IconButton onClick={() => setMobileDrawer(false)}>
            <CloseOutlinedIcon sx={{ color: "text.primary" }} />
          </IconButton>
        </Box>
        <List
          sx={{
            mb: "20px",
          }}
        >
          <ListItem
            component={Link}
            className={classes.mobileListItem}
            // onClick={() => history.push('/home')}
            href="/"
          >
            Home
          </ListItem>
          <ListItem
            component={Link}
            className={classes.mobileListItem}
            // onClick={() => history.push('/about')}
            href="#about"
          >
            About
          </ListItem>
          <ListItem
            component={Link}
            className={classes.mobileListItem}
            // onClick={() => history.push('/tokenmetrics')}
            href="#tokenmetrics"
          >
            Tokenmetrics
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
}
