'use client'
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Page() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        src="videos/archiii.mp4" 
      />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          px: 2,
          maxWidth: '90vw',
          width: '100%',
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: {md: '64px', xs: '28px'} }}>
          LET'S BUILD
        </Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: {md: '64px', xs: '28px'} }}>
          YOUR DESIGN
        </Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: {md: '64px', xs: '28px'} }}>
          IN BIM
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, fontSize: {md: '24px', xs: '14px'} }}>
          Connect through MTN with international award-winning architecture
        </Typography>
        <Typography variant="h5" sx={{ my: 1, fontSize: {md: '24px', xs: '14px'} }}>
          We make sure that your ideas turn into top-tier projects for 20% cut-rate price
        </Typography>
        <Button color='primary'>
            {/* color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>; */}
          Explore
        </Button>
      </Box>
    </Box>
  );
}
