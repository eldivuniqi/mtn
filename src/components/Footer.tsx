'use client'
import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'red',
        color: 'white',
        py: 2
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 2, fontWeight: 'medium' }}
        >
          © 2025 MTN Communications. All Rights Reserved.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            alignItems: 'center',
          }}
        >
          {['Privacy Policy', 'Terms of Service', 'Privacy', 'Contact'].map(
            (text) => (
              <Link
                href="#"
                key={text}
                underline="hover"
                color="inherit"
                sx={{ cursor: 'pointer', fontWeight: 'medium' }}
              >
                {text}
              </Link>
            )
          )}

          <IconButton
            aria-label="LinkedIn"
            component="a"
            href="https://www.linkedin.com/company/mtncommunications"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
