import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
  Chip,
  Stack,
  Divider,
  Avatar,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  Code, 
  Psychology, 
  TrendingUp, 
  School,
  Work,
  Star,
  Lightbulb,
  Rocket,
  Target,
  EmojiEvents
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    { 
      icon: <Code />, 
      text: "Full Stack Development", 
      color: theme.palette.primary.main,
      description: "Building end-to-end solutions with modern technologies"
    },
    { 
      icon: <Psychology />, 
      text: "Problem Solving", 
      color: theme.palette.secondary.main,
      description: "Analytical approach to complex technical challenges"
    },
    { 
      icon: <TrendingUp />, 
      text: "Scalable Solutions", 
      color: theme.palette.success.main,
      description: "Designing systems that grow with your business"
    },
    { 
      icon: <School />, 
      text: "Continuous Learning", 
      color: theme.palette.info.main,
      description: "Always exploring new technologies and methodologies"
    },
  ];

  const stats = [
    { number: "1", label: "Year Experience", icon: <Work /> },
    { number: "2+", label: "Projects Completed", icon: <Code /> },
    { number: "5+", label: "Technologies Mastered", icon: <Star /> },
    { number: "100%", label: "Client Satisfaction", icon: <EmojiEvents /> },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.mode === 'dark' ? '#0a0a0a' : '#f8fafc'} 100%)`,
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
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 900,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
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
              About Me
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' }
              }}
            >
              Passionate developer with a drive for innovation and excellence
            </Typography>
          </Box>

          {/* Main Content Grid */}
          <Grid container spacing={4} alignItems="center">
            {/* Left: Profile Image and Stats */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Avatar
                    sx={{
                      width: { xs: 200, md: 250 },
                      height: { xs: 200, md: 250 },
                      mx: 'auto',
                      mb: 3,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      border: `4px solid ${theme.palette.background.paper}`,
                      boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                      fontSize: { xs: '4rem', md: '5rem' },
                      fontWeight: 700,
                    }}
                  >
                    SN
                  </Avatar>
                  
                  {/* Stats Grid */}
                  <Grid container spacing={2}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            background: theme.palette.mode === 'dark' 
                              ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                              : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                            border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              color: theme.palette.primary.main,
                              mb: 1,
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {stat.icon}
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 900,
                              color: theme.palette.text.primary,
                              mb: 0.5,
                              fontSize: { xs: '1.5rem', md: '1.8rem' },
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                              fontSize: { xs: '0.8rem', md: '0.9rem' },
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: About Content */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                    borderRadius: 4,
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
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    Who I Am
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' },
                      lineHeight: 1.8,
                      color: theme.palette.text.primary,
                      mb: 4,
                      fontWeight: 400,
                    }}
                  >
                    I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                    With expertise in React, Node.js, and various databases, I specialize in building scalable, 
                    user-friendly applications that solve real-world problems. My journey in technology is driven 
                    by continuous learning and a desire to create innovative solutions that make a difference.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' },
                      lineHeight: 1.8,
                      color: theme.palette.text.primary,
                      mb: 4,
                      fontWeight: 400,
                    }}
                  >
                    Currently working as a Junior Software Associate at SNS Innovation Hub, I'm actively 
                    developing a modern accounting platform using the MERN stack. I'm passionate about 
                    exploring emerging technologies like Gen AI and always eager to take on new challenges 
                    that push my technical boundaries.
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  {/* Highlights Grid */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    What I Do Best
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {highlights.map((highlight, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: theme.palette.mode === 'dark' ? '#333' : '#f8fafc',
                            border: `1px solid ${theme.palette.divider}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 16px ${highlight.color}30`,
                              borderColor: highlight.color,
                            },
                          }}
                        >
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Box
                              sx={{
                                p: 1,
                                borderRadius: 1.5,
                                background: `${highlight.color}20`,
                                color: highlight.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: 40,
                                height: 40,
                              }}
                            >
                              {highlight.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 700,
                                  color: theme.palette.text.primary,
                                  fontSize: { xs: '0.9rem', md: '1rem' },
                                  mb: 0.5,
                                }}
                              >
                                {highlight.text}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                                  lineHeight: 1.4,
                                }}
                              >
                                {highlight.description}
                              </Typography>
                            </Box>
                          </Stack>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 