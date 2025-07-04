import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  Stack,
  Divider,
  Link,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  ArrowUpward,
} from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { 
      icon: <GitHub />, 
      url: 'https://github.com/', 
      label: 'GitHub',
      color: theme.palette.mode === 'dark' ? '#fff' : '#333',
    },
    { 
      icon: <LinkedIn />, 
      url: 'https://linkedin.com/in/shreenevikha-n', 
      label: 'LinkedIn',
      color: '#0077b5',
    },
    { 
      icon: <Email />, 
      url: 'mailto:shreenevikha2003@gmail.com', 
      label: 'Email',
      color: '#ea4335',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        py: 6,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 3,
              mb: 4,
            }}
          >
            {/* Brand Section */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                }}
              >
                SHREENEVIKHA N
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  maxWidth: 300,
                }}
              >
                Full Stack Developer passionate about creating innovative solutions
              </Typography>
            </Box>

            {/* Social Links */}
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconButton
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: social.color,
                      border: `2px solid ${theme.palette.divider}`,
                      width: 50,
                      height: 50,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        transform: 'translateY(-3px) rotate(5deg)',
                        boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                        background: theme.palette.primary.main + '10',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.8rem', md: '0.85rem' },
              }}
            >
              © {currentYear} Shreenevikha N. All rights reserved.
            </Typography>

            {/* Quick Links */}
            <Stack 
              direction="row" 
              spacing={3}
              sx={{ 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 2, md: 3 },
              }}
            >
              <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    cursor: 'pointer',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Home
                </Typography>
              </ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    cursor: 'pointer',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  About
                </Typography>
              </ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    cursor: 'pointer',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Projects
                </Typography>
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    cursor: 'pointer',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Contact
                </Typography>
              </ScrollLink>
            </Stack>

            {/* Back to Top Button */}
            <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500}>
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    border: `2px solid ${theme.palette.primary.main}`,
                    background: 'transparent',
                    width: 45,
                    height: 45,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: theme.palette.primary.main,
                      color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                    },
                  }}
                >
                  <ArrowUpward sx={{ fontSize: '1.2rem' }} />
                </IconButton>
              </motion.div>
            </ScrollLink>
          </Box>

          {/* Made with Love */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: '0.75rem', md: '0.8rem' },
                opacity: 0.8,
              }}
            >
              Made with ❤️ using React & Material-UI
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 