import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Send as SendIcon,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  MailOutline,
} from '@mui/icons-material';

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'shreenevikha2003@gmail.com',
    link: 'mailto:shreenevikha2003@gmail.com',
    bg: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91 9080856291',
    link: 'tel:+919080856291',
    bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Coimbatore, TamilNadu',
    link: null,
    bg: 'linear-gradient(135deg, #396afc 0%, #2948ff 100%)',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/shreenevikha-n',
    link: 'https://linkedin.com/in/shreenevikha-n',
    bg: 'linear-gradient(135deg, #0a66c2 0%, #0072b1 100%)',
  },
];

const socialLinks = [
  {
    icon: <LinkedIn />,
    url: 'https://linkedin.com/in/shreenevikha-n',
    label: 'LinkedIn',
    bg: 'linear-gradient(135deg, #0a66c2 0%, #0072b1 100%)',
  },
  {
    icon: <GitHub />,
    url: 'https://github.com/',
    label: 'GitHub',
    bg: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
  },
  {
    icon: <MailOutline />,
    url: 'mailto:shreenevikha2003@gmail.com',
    label: 'Email',
    bg: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
  },
];

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, md: 8 },
        // Animated gradient background
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(120deg, #232526 0%, #414345 100%)'
          : 'linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, #a21caf33 0%, transparent 60%), radial-gradient(circle at 20% 80%, #6366f133 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 900,
            mb: 1,
            background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 1,
            fontSize: { xs: '2rem', md: '2.8rem' },
            textShadow: '0 2px 8px rgba(99,102,241,0.12)',
            animation: 'gradient-move 3s ease-in-out infinite',
          }}
        >
          Let's Work Together
        </Typography>
        <Typography
          align="center"
          sx={{
            mb: 5,
            color: theme.palette.text.secondary,
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Ready to start your next project? Let's discuss how I can help bring your ideas to life.
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Contact Info */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 6 } }}>
              <Stack spacing={3}>
                {contactInfo.map((info, idx) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={idx}>
                    <Box
                      sx={{
                        background: info.bg,
                        color: '#fff',
                        p: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 44,
                        height: 44,
                        fontSize: 24,
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'scale(1.08) rotate(-3deg)',
                          boxShadow: '0 4px 16px 0 rgba(99,102,241,0.18)',
                        },
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          component="a"
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            textDecoration: 'none',
                            wordBreak: 'break-all',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          {info.value}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {info.value}
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                ))}
              </Stack>
              <Divider sx={{ my: 4 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((social, idx) => (
                  <IconButton
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      background: social.bg,
                      color: '#fff',
                      border: 'none',
                      width: 40,
                      height: 40,
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        filter: 'brightness(1.15)',
                        transform: 'scale(1.15) rotate(6deg)',
                        boxShadow: '0 4px 16px 0 rgba(99,102,241,0.18)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
          {/* Right: Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={12}
              sx={{
                borderRadius: 5,
                p: { xs: 3, md: 4 },
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(30,34,44,0.85)'
                  : 'rgba(255,255,255,0.85)',
                boxShadow: '0 12px 48px 0 rgba(99,102,241,0.18)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(99,102,241,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 0,
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at 80% 20%, #a21caf22 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>
                  Send me a message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                    <TextField
                      fullWidth
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                    <TextField
                      fullWidth
                      label="Subject *"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                    <TextField
                      fullWidth
                      label="Message *"
                      name="message"
                      multiline
                      minRows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me more about your project or inquiry..."
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      startIcon={<SendIcon />}
                      sx={{
                        background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1rem',
                        py: 1.5,
                        borderRadius: 2,
                        mt: 1,
                        textTransform: 'none',
                        boxShadow: 'none',
                        letterSpacing: 1,
                        transition: 'background 0.3s, filter 0.2s',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #a21caf 0%, #6366f1 100%)',
                          boxShadow: '0 2px 8px 0 rgba(99,102,241,0.15)',
                          filter: 'brightness(1.08)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(99,102,241,0.15)' : '#e0e7ff',
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#3730a3' }}>
                        <strong>Note:</strong> This is a styled contact form for portfolio demonstration. For direct contact, please use the email or LinkedIn links above.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;