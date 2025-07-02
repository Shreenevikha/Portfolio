import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Email />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <Box
      sx={{
        py: 4,
        background: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 