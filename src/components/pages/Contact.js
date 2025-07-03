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
  useTheme,
} from '@mui/material';
import { 
  Send as SendIcon,
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter
} from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'shreenevikha2003@gmail.com',
      link: 'mailto:shreenevikha2003@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 9080856291',
      link: 'tel:+919080856291',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Coimbatore, TamilNadu',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/shreenevikha-n', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              marginBottom: 2,
              position: 'relative',
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '0.08em',
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
            Get In Touch
          </Typography>
          <Typography
            align="center"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            I'm always open to discussing new opportunities, innovative projects, and creative ideas. Feel free to reach out!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  background: theme.palette.mode === 'dark' ? '#181a1b' : '#fff',
                  border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
                  boxShadow: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Let's Connect
                </Typography>
                <Stack spacing={3} sx={{ mb: 2 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Paper
                          elevation={0}
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: theme.palette.mode === 'dark' ? '#23272f' : '#f3f6fa',
                            color: theme.palette.text.primary,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: 50,
                            height: 50,
                          }}
                        >
                          {info.icon}
                        </Paper>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <Typography
                              component="a"
                              href={info.link}
                              variant="body1"
                              sx={{
                                color: theme.palette.text.secondary,
                                textDecoration: 'none',
                                '&:hover': {
                                  color: theme.palette.primary.main,
                                },
                              }}
                            >
                              {info.value}
                            </Typography>
                          ) : (
                            <Typography
                              variant="body1"
                              sx={{ color: theme.palette.text.secondary }}
                            >
                              {info.value}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
                {/* Social Links */}
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 1.5,
                    }}
                  >
                    Follow Me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <IconButton
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          sx={{
                            color: theme.palette.text.primary,
                            border: `2px solid ${theme.palette.primary.main}`,
                            width: 48,
                            height: 48,
                            '&:hover': {
                              background: theme.palette.primary.main,
                              color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  background: theme.palette.mode === 'dark' ? '#181a1b' : '#fff',
                  border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e0e0e0'}`,
                  boxShadow: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Send Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                            '&.Mui-focused': {
                              color: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                            '&.Mui-focused': {
                              color: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                            '&.Mui-focused': {
                              color: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 