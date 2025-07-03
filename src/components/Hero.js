import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import { 
  KeyboardArrowDown,
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Download
} from '@mui/icons-material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "FULL STACK DEVELOPER",
    "FRONTEND DEVELOPER", 
    "BACKEND DEVELOPER",
    "UI/UX DESIGNER",
    "REACT DEVELOPER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark' 
          ? '#000000' 
          : '#f6f8fa',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 20% 80%, rgba(0, 255, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 153, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(100, 116, 139, 0.05) 0%, transparent 50%)',
        }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center',
          color: theme.palette.text.primary
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Name */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '3.2rem', lg: '4rem' },
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              lineHeight: 0.85,
              mb: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: theme.palette.mode === 'dark' 
                ? '0 0 40px rgba(0, 212, 255, 0.4)' 
                : '0 0 40px rgba(37, 99, 235, 0.3)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            }}
          >
            SHREENEVIKHA N
          </Typography>

          {/* Animated Title with neon underline */}
          <Box sx={{ position: 'relative', mb: 4, minHeight: '3rem' }}>
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '1.8rem', lg: '2rem' },
                  color: theme.palette.text.primary,
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {roles[currentRole]}
              </Typography>
            </motion.div>
            <Box
              sx={{
                width: 120,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                margin: '0 auto',
                borderRadius: 2,
                boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
              }}
            />
          </Box>

          {/* Contact Info Grid */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={{ xs: 1, md: 3 }} 
            justifyContent="center" 
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOn sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.4rem', md: '1.6rem', lg: '1.8rem' } }} />
              <Typography variant="body1" sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' } }}>
                Coimbatore, TamilNadu
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <Phone sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.4rem', md: '1.6rem', lg: '1.8rem' } }} />
              <Typography variant="body1" sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' } }}>
                +91 9080856291
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <Email sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.4rem', md: '1.6rem', lg: '1.8rem' } }} />
              <Typography 
                variant="body1" 
                component="a"
                href="mailto:shreenevikha2003@gmail.com"
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' },
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  }
                }}
              >
                shreenevikha2003@gmail.com
              </Typography>
            </Stack>
          </Stack>

          {/* Social Icons */}
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            sx={{ mb: 4 }}
          >
            <IconButton
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                border: `2px solid ${theme.palette.primary.main}`,
                width: 50,
                height: 50,
                '&:hover': {
                  background: theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub sx={{ fontSize: { xs: '1.8rem', md: '2rem', lg: '2.2rem' } }} />
            </IconButton>
            
            <IconButton
              href="https://linkedin.com/in/shreenevikha-n"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                border: `2px solid ${theme.palette.primary.main}`,
                width: 50,
                height: 50,
                '&:hover': {
                  background: theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedIn sx={{ fontSize: { xs: '1.8rem', md: '2rem', lg: '2.2rem' } }} />
            </IconButton>
          </Stack>

          {/* Download Resume Button */}
          <Box sx={{ mb: 4 }}>
            <Button
              variant="outlined"
              size="large"
              href="/resume.pdf"
              target="_blank"
              download
              startIcon={<Download />}
              sx={{
                border: `2px solid ${theme.palette.primary.main}`,
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  background: theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download Resume
            </Button>
          </Box>

          {/* Tagline */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.secondary,
              maxWidth: 600,
              margin: '0 auto',
              mb: 4,
              fontStyle: 'italic',
              fontSize: { xs: '0.95rem', md: '1.1rem', lg: '1.2rem' },
            }}
          >
            "Building scalable solutions with a passion for innovation and continuous learning"
          </Typography>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <IconButton
              sx={{
                color: theme.palette.primary.main,
                border: `2px solid ${theme.palette.primary.main}`,
                background: 'transparent',
                width: 60,
                height: 60,
                '&:hover': {
                  background: theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <KeyboardArrowDown sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 