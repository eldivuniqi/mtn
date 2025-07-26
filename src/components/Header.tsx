'use client'
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ['MTNCommunications', 'Services', 'Projects', 'Book A Meeting'];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'red', height: '70px' }}>
      <Container sx={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: {md: 'space-between', xs: 'flex-end'} }}>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '25px' }}>
          {navItems.map((item) => (
            <Typography key={item} sx={{ color: 'white', cursor: 'pointer' }}>
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navItems.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>

              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
