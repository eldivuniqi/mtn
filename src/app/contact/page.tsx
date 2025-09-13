'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Contact Us and Connect 
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, lineHeight: {xs: 1, sm: 0.8} }}
      >
        To World-Wide Architecture Network   
      </Typography>

      <Box
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 6, md: 5 },
          justifyContent: 'center',
          alignItems: 'flex-start',
              minHeight: '55vh',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: '600px',
            mx: 'auto',
            width: '100%'
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            required
            multiline
            minRows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" size="large" sx={{backgroundColor: 'rgb(187, 14, 128)', borderRadius: 3}}>
            Submit
          </Button>
        </Box>

<Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Box sx={{ flex: 1, maxWidth: '600px', mx: 'auto' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'rgb(187, 14, 128)' }}>
            Connecting the world through design.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            At MTN Communications, we bring the visionary expertise of renowned architects from abroad to the UK stage.
            Our company was founded on the belief that world-class architectural expertise should be accessible and
            affordable for everyone—whether you're an individual, a business, or a large organization.
          </Typography>
        </Box>

<Box sx={{ flex: 1, maxWidth: '600px', mx: 'auto' }}>
  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'rgb(187, 14, 128)' }}>
    Let’s bring your vision to life.
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
    Whether you’re starting a new project or just have a few questions, we’d love to hear from you. 
    Fill out the contact form below and a member of our team will be in touch shortly.
    <br /><br />
    Prefer email? You can also reach us directly at{' '}
    <a
      href="mailto:info@mtn-com.com"
      style={{ color: 'rgb(187, 14, 128)', textDecoration: 'none', fontWeight: 500 }}
    >
      info@mtn-com.com
    </a>
  </Typography>
</Box>

        </Box>
      </Box>
    </Container>
  );
}
