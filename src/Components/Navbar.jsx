import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import logo from '../assets/images/headerLogo.svg';
import { Typography } from '@mui/material';

export default function NavAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250, mt: 8 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton
        size="large"
        color="inherit"
        aria-label="close"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={toggleDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
     <AppBar
  position="static"
  sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}
>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    {/* Logo and Restaurant Name */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{ height: 40 }}
      />
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Bebas Neue', cursive",
          color: 'hsl(236, 13%, 25%)',
          fontWeight: 900,
          letterSpacing: '1.5px',
          display: { xs: 'none', sm: 'block' }
        }}
      >
        BUFFLO BURGER
      </Typography>
    </Box>

    {/* Navigation Buttons */}
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Button
        color="inherit"
        sx={{
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.1rem',
          '&:hover': {
            color: 'hsl(5, 85%, 63%)',
            backgroundColor: 'transparent',
          },
          mx: 2,
          fontFamily: "'Oswald', sans-serif"
        }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        sx={{
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.1rem',
          '&:hover': {
            color: 'hsl(5, 85%, 63%)',
            backgroundColor: 'transparent',
          },
          mx: 2,
          fontFamily: "'Oswald', sans-serif"
        }}
      >
        Menu
      </Button>
      <Button
        color="inherit"
        sx={{
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.1rem',
          '&:hover': {
            color: 'hsl(5, 85%, 63%)',
            backgroundColor: 'transparent',
          },
          mx: 2,
          fontFamily: "'Oswald', sans-serif"
        }}
      >
        About
      </Button>
      <Button
        color="inherit"
        sx={{
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.1rem',
          '&:hover': {
            color: 'hsl(5, 85%, 63%)',
            backgroundColor: 'transparent',
          },
          mx: 2,
          fontFamily: "'Oswald', sans-serif"
        }}
      >
        Contact
      </Button>
    </Box>

    {/* Mobile Menu Button */}
    <IconButton
      size="large"
      edge="end"
      color="inherit"
      aria-label="menu"
      sx={{ 
        ml: 2, 
        display: { xs: 'flex', sm: 'none' },
        color: 'hsl(236, 13%, 25%)'
      }}
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </Box>
  );
}
