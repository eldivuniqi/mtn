'use client';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? '#fff' : '#111',
            mb: 1,
          }}
        >
          Connecting the world through design.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.mode === 'dark' ? '#ccc' : '#555',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          <span style={{color: '#BB0E80', fontWeight: 600}}>20% </span>LESS FOR <span style={{color: '#BB0E80', fontWeight: 600}}>20% </span> MORE QUALITY
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9',
            p: 4,
            borderRadius: 2,
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: '#BB0E80' }}
          >
            Send us a message
          </Typography>

          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label="Email Address"
            name="email"
            fullWidth
            required
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Message"
            name="message"
            fullWidth
            required
            multiline
            minRows={5}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#BB0E80',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 2,
              px: 4,
              py: 1.25,
              '&:hover': {
                backgroundColor: '#9a0c6c',
              },
            }}
          >
            Submit
          </Button>
        </Box>

        {/* Info Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#BB0E80',
                mb: 1,
              }}
            >
              Strategic Design Communication
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            At MTN Communications, we bring the visionary expertise of renowned architects from abroad to the UK stage.
            Our company was founded on the belief that world-class architectural expertise should be accessible and
            affordable for everyone—whether you're an individual, a business, or a large organization.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#BB0E80',
                mb: 1,
              }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
              We typically respond within 24 hours.
              <br />
              For direct inquiries, please email:
              <br />
              <a
                href="mailto:info@mtn-com.com"
                style={{
                  color: '#BB0E80',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
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
