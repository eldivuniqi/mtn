'use client';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const validateName = (name: string) => {
    if (!name.trim()) return 'Name is required';
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name)) return 'Name can only contain letters and spaces';
    return '';
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return 'Email is required';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return 'Invalid email address';
    return '';
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return 'Message is required';
    return '';
  };

  const validateAll = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    return !(nameError || emailError || messageError);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = '';
    if (name === 'name') error = validateName(value);
    else if (name === 'email') error = validateEmail(value);
    else if (name === 'message') error = validateMessage(value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = '';
    if (name === 'name') error = validateName(formData.name);
    else if (name === 'email') error = validateEmail(formData.email);
    else if (name === 'message') error = validateMessage(formData.message);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (!validateAll()) {
      return;
    }

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      });

      const tempForm = document.createElement('form');
      tempForm.action = 'https://formsubmit.co/info@mtn-com.com'; 
      tempForm.method = 'POST';
      tempForm.target = '_blank';

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.value = formData.name;
      tempForm.appendChild(nameInput);

      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.value = formData.email;
      tempForm.appendChild(emailInput);

      const messageInput = document.createElement('textarea');
      messageInput.name = 'message';
      messageInput.value = formData.message;
      tempForm.appendChild(messageInput);

      const captchaInput = document.createElement('input');
      captchaInput.type = 'hidden';
      captchaInput.name = '_captcha';
      captchaInput.value = 'false';
      tempForm.appendChild(captchaInput);

      document.body.appendChild(tempForm);
      tempForm.submit();
      document.body.removeChild(tempForm);

      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });

      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const theme = useTheme();

  const isSubmitDisabled =
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim() ||
    !!errors.name ||
    !!errors.email ||
    !!errors.message;

  return (
    <>
      <Head>
        <title>Contact MTN Communications | Expert Architectural Design Services UK</title>
        <meta
          name="description"
          content="Get in touch with MTN Communications — connecting the UK with visionary architects worldwide. Reach out for affordable, world-class architectural expertise tailored for individuals, businesses, and organizations. We typically respond within 24 hours."
        />
      </Head>
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
          <span style={{ color: '#BB0E80', fontWeight: 600 }}>20% </span>LESS
          FOR{' '}
          <span style={{ color: '#BB0E80', fontWeight: 600 }}>20% </span> MORE
          QUALITY
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            backgroundColor:
              theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9',
            p: 4,
            borderRadius: 2,
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#BB0E80' }}>
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
            onBlur={handleBlur}
            error={touched.name && !!errors.name}
            helperText={touched.name ? errors.name : ''}
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
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email ? errors.email : ''}
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
            onBlur={handleBlur}
            error={touched.message && !!errors.message}
            helperText={touched.message ? errors.message : ''}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitDisabled}
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
              At MTN Communications, we bring the visionary expertise of renowned
              architects from abroad to the UK stage. Our company was founded on
              the belief that world-class architectural expertise should be
              accessible and affordable for everyone—whether you&apos;re an
              individual, a business, or a large organization.
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 8 }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          elevation={6}
          variant="filled"
          sx={{
            width: { md: '800px', xs: '100%' },
            backgroundColor: '#BB0E80',
            color: '#fff',
            '& .MuiAlert-icon': {
              color: '#fff',
            },
          }}
        >
          Message Sent Successfully!
        </Alert>
      </Snackbar>
    </Container>
    </>
  );
}
