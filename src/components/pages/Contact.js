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
  Avatar,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Send as SendIcon,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  MailOutline,
  CheckCircle,
  Error,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'shreenevikha2003@gmail.com',
    link: 'mailto:shreenevikha2003@gmail.com',
    bg: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    description: 'Send me an email anytime',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91 9080856291',
    link: 'tel:+919080856291',
    bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Call me for urgent matters',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Coimbatore, TamilNadu',
    link: null,
    bg: 'linear-gradient(135deg, #396afc 0%, #2948ff 100%)',
    description: 'Based in South India',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/shreenevikha-n',
    link: 'https://linkedin.com/in/shreenevikha-n',
    bg: 'linear-gradient(135deg, #0a66c2 0%, #0072b1 100%)',
    description: 'Connect with me professionally',
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
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, md: 8 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        },
        '&::after': {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: 1,
              fontSize: { xs: '2rem', md: '2.8rem' },
              textShadow: '0 2px 8px rgba(99,102,241,0.12)',
              textTransform: 'uppercase',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                borderRadius: 2,
              },
            }}
          >
            Let's Work Together
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.15rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ pr: { md: 6 } }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 4, 
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                  }}
                >
                  Get In Touch
                </Typography>
                
                <Stack spacing={3}>
                  {contactInfo.map((info, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          background: theme.palette.mode === 'dark' 
                            ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                            : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                          border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                            borderColor: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Stack direction="row" spacing={3} alignItems="center">
                          <Avatar
                            sx={{
                              background: info.bg,
                              color: '#fff',
                              width: 56,
                              height: 56,
                              boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                            }}
                          >
                            {info.icon}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: 700, 
                                color: theme.palette.text.primary,
                                mb: 0.5,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                              }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                mb: 1,
                                fontSize: { xs: '0.85rem', md: '0.9rem' },
                              }}
                            >
                              {info.description}
                            </Typography>
                            {info.link ? (
                              <Typography
                                component="a"
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body1"
                                sx={{
                                  color: theme.palette.primary.main,
                                  textDecoration: 'none',
                                  wordBreak: 'break-all',
                                  fontWeight: 600,
                                  fontSize: { xs: '0.9rem', md: '1rem' },
                                  '&:hover': { 
                                    color: theme.palette.secondary.main,
                                    textDecoration: 'underline',
                                  },
                                }}
                              >
                                {info.value}
                              </Typography>
                            ) : (
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  color: theme.palette.text.primary,
                                  fontWeight: 600,
                                  fontSize: { xs: '0.9rem', md: '1rem' },
                                }}
                              >
                                {info.value}
                              </Typography>
                            )}
                          </Box>
                        </Stack>
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>

                <Divider sx={{ my: 4 }} />
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3, 
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                  }}
                >
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          background: social.bg,
                          color: '#fff',
                          border: 'none',
                          width: 50,
                          height: 50,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            filter: 'brightness(1.15)',
                            transform: 'scale(1.15) rotate(6deg)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={12}
                sx={{
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(30,34,44,0.95)'
                    : 'rgba(255,255,255,0.95)',
                  boxShadow: `0 20px 60px rgba(99,102,241,0.25)`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid rgba(99,102,241,0.2)`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  },
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
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 3, 
                      color: theme.palette.primary.main,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    Send me a message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Full Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Subject *"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                          py: 2,
                          borderRadius: 2,
                          mt: 1,
                          textTransform: 'none',
                          boxShadow: 'none',
                          letterSpacing: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(90deg, #a21caf 0%, #6366f1 100%)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </Box>
                  
                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(99,102,241,0.15)' : '#e0e7ff',
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(99,102,241,0.3)' : '#c7d2fe'}`,
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.mode === 'dark' ? '#fff' : '#3730a3',
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>Note:</strong> This is a styled contact form for portfolio demonstration. 
                      For direct contact, please use the email or LinkedIn links above.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          icon={snackbar.severity === 'success' ? <CheckCircle /> : <Error />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;