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
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
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
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
