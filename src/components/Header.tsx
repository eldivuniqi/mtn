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
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'MTNCommunications', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Book A Meeting', href: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerNavItems = navItems.filter((item) => item.label !== 'MTNCommunications');

  return (
    <Box sx={{ width: '100%', backgroundColor: '#000000', height: '70px' }}>
      <Container
        sx={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: {md: 'left', xs: 'space-between'},
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref>
            <Typography
              sx={{
                color: 'white',
                fontWeight: '600',
                fontSize: { md: '18px', xs: '16px' },
                cursor: 'pointer',
                userSelect: 'none',
                letterSpacing: '1px',
                pr: 3,
                '&:hover': {
                  color: 'rgb(187, 14, 128)',
                  textDecoration: 'underline',
                },
              }}
            >
              MTNCommunications
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '25px' }}>
          {navItems.slice(1).map(({ label, href }) => (
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
            sx={{
              width: 280,
              backgroundColor: '#121212',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {drawerNavItems.map(({ label, href }) => (
                <Link key={label} href={href} passHref style={{ width: '100%' }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        mx: 2,
                        mb: 1,
                        color: 'white',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(187, 14, 128, 0.15)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mt: 'auto' }} />
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
