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
    bg: '#ef476f',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91 9080856291',
    link: 'tel:+919080856291',
    bg: '#06d6a0',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Coimbatore, TamilNadu',
    link: null,
    bg: '#118ab2',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/shreenevikha-n',
    link: 'https://linkedin.com/in/shreenevikha-n',
    bg: '#2563eb',
  },
];

const socialLinks = [
  {
    icon: <LinkedIn />,
    url: 'https://linkedin.com/in/shreenevikha-n',
    label: 'LinkedIn',
  },
  {
    icon: <GitHub />,
    url: 'https://github.com/',
    label: 'GitHub',
  },
  {
    icon: <MailOutline />,
    url: 'mailto:shreenevikha2003@gmail.com',
    label: 'Email',
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
    <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default, py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 1,
            color: 'primary.main',
            letterSpacing: 1,
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
                        bgcolor: info.bg,
                        color: '#fff',
                        p: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 44,
                        height: 44,
                        fontSize: 24,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
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
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
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
                      bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#f3f4f6',
                      color: 'text.primary',
                      border: `1px solid ${theme.palette.divider}`,
                      width: 40,
                      height: 40,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: '#fff',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.2s',
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
              elevation={3}
              sx={{
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                bgcolor: theme.palette.background.paper,
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
                mt: 0,
                mb: 0,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
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
                      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      py: 1.5,
                      borderRadius: 2,
                      mt: 1,
                      textTransform: 'none',
                      boxShadow: 'none',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)',
                        boxShadow: '0 2px 8px 0 rgba(59,130,246,0.15)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                  <Box
                    sx={{
                      mt: 2,
                      p: 2,
                      bgcolor: theme.palette.mode === 'dark' ? '#23272f' : '#e0e7ff',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#3730a3' }}>
                      <strong>Note:</strong> This is a styled contact form for portfolio demonstration. For direct contact, please use the email or LinkedIn links above.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;