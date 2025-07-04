import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Button,
  Avatar,
} from '@mui/material';
import { 
  KeyboardArrowDown,
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Download,
  Code,
  Brush,
  Storage,
  Psychology,
  TrendingUp
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

  const roleIcons = [
    <Code />,
    <Brush />,
    <Storage />,
    <Psychology />,
    <TrendingUp />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

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
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)',
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
            ? 'radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 255, 136, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(5, 150, 105, 0.06) 0%, transparent 50%)',
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.secondary.main}20, ${theme.palette.primary.main}20)`,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

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
          transition={{ duration: 1 }}
        >
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Avatar
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                mx: 'auto',
                mb: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                border: `4px solid ${theme.palette.background.paper}`,
                boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                fontSize: { xs: '3rem', md: '4rem' },
                fontWeight: 700,
              }}
            >
              SN
            </Avatar>
          </motion.div>

          {/* Main Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                lineHeight: 0.9,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.primary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: theme.palette.mode === 'dark' 
                  ? '0 0 40px rgba(0, 212, 255, 0.4)' 
                  : '0 0 40px rgba(37, 99, 235, 0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                animation: 'gradient-shift 3s ease-in-out infinite',
                '@keyframes gradient-shift': {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
              }}
            >
              SHREENEVIKHA N
            </Typography>
          </motion.div>

          {/* Animated Title with icon */}
          <Box sx={{ position: 'relative', mb: 4, minHeight: '4rem' }}>
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                  }}
                >
                  {roleIcons[currentRole]}
                </Box>
                <Typography
                  variant="h3"
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem', lg: '2.2rem' },
                    color: theme.palette.text.primary,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {roles[currentRole]}
                </Typography>
              </Stack>
            </motion.div>
            <Box
              sx={{
                width: 150,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                margin: '0 auto',
                borderRadius: 2,
                boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1, transform: 'scaleX(1)' },
                  '50%': { opacity: 0.7, transform: 'scaleX(1.1)' },
                },
              }}
            />
          </Box>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={{ xs: 2, md: 4 }} 
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
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack 
              direction="row" 
              spacing={3} 
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
                  width: 60,
                  height: 60,
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                    transform: 'translateY(-3px) rotate(5deg)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub sx={{ fontSize: { xs: '2rem', md: '2.2rem', lg: '2.4rem' } }} />
              </IconButton>
              
              <IconButton
                href="https://linkedin.com/in/shreenevikha-n"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.primary,
                  border: `2px solid ${theme.palette.primary.main}`,
                  width: 60,
                  height: 60,
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                    transform: 'translateY(-3px) rotate(-5deg)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: '2rem', md: '2.2rem', lg: '2.4rem' } }} />
              </IconButton>
            </Stack>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box sx={{ mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                href="/resume.pdf"
                target="_blank"
                download
                startIcon={<Download />}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: theme.palette.text.secondary,
                maxWidth: 700,
                margin: '0 auto',
                mb: 4,
                fontStyle: 'italic',
                fontSize: { xs: '1rem', md: '1.2rem', lg: '1.3rem' },
                lineHeight: 1.6,
              }}
            >
              "Building scalable solutions with a passion for innovation and continuous learning. 
              Transforming ideas into reality through code and creativity."
            </Typography>
          </motion.div>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
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
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-10px)' },
                  '60%': { transform: 'translateY(-5px)' },
                },
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