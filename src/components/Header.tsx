'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'MTNCommunications', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Book A Meeting', href: '/contact' }, // Contact page
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#000000', height: '70px' }}>
      <Container
        sx={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { md: 'space-between', xs: 'flex-end' },
        }}
      >
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '25px' }}>
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} passHref>
<Typography
  sx={{
    color: 'white',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '1rem',
    letterSpacing: '0.5px',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: 'rgb(187, 14, 128)', 
      transform: 'translateY(-2px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: 'rgb(187, 14, 128)',
      transition: 'width 0.3s',
    },
    '&:hover::after': {
      width: '100%',
    },
  }}
>
  {label}
</Typography>

            </Link>
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
              {navItems.map(({ label, href }) => (
                <ListItem key={label} disablePadding>
                  <Link href={href} passHref style={{ width: '100%' }}>
                    <ListItemButton component="a">
                      <Typography>{label}</Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
