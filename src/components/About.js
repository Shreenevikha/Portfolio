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
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  Code, 
  Psychology, 
  TrendingUp, 
  School,
  Work,
  Star
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    { icon: <Code />, text: "Full Stack Development", color: theme.palette.primary.main },
    { icon: <Psychology />, text: "Problem Solving", color: theme.palette.secondary.main },
    { icon: <TrendingUp />, text: "Scalable Solutions", color: theme.palette.success.main },
    { icon: <School />, text: "Continuous Learning", color: theme.palette.info.main },
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
          height: '6px',
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
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 6,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  borderRadius: 3,
                },
              }}
            >
              Professional Profile
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.2rem', md: '1.4rem' }
              }}
            >
              Passionate technologist crafting innovative solutions for tomorrow's challenges
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                    : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '6px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.4rem', lg: '1.5rem' },
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                    textAlign: 'justify',
                    fontWeight: 400,
                    mb: 4,
                  }}
                >
                  I am a <strong>curious technologist</strong> with a <strong>builder's mindset</strong>—driven by challenges, guided by purpose, and fueled by continuous learning. I design <strong>scalable solutions</strong> not just to solve problems, but to unlock new possibilities and accelerate meaningful progress.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem', lg: '1.4rem' },
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                    textAlign: 'justify',
                    fontWeight: 400,
                  }}
                >
                  With expertise in <strong>full-stack development</strong>, <strong>cloud architecture</strong>, and <strong>emerging technologies</strong>, I specialize in creating robust, user-centric applications that drive business value. My approach combines technical excellence with strategic thinking to deliver solutions that not only meet current needs but also scale for future growth.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: 4,
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                    : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                  height: '100%',
                  boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    mb: 4,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    textAlign: 'center',
                  }}
                >
                  Key Competencies
                </Typography>
                
                <Stack spacing={3}>
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 3,
                          background: theme.palette.mode === 'dark' ? '#333' : '#f1f5f9',
                          border: `1px solid ${theme.palette.divider}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${highlight.color}30`,
                            borderColor: highlight.color,
                          }
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: highlight.color + '20',
                            color: highlight.color,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {highlight.icon}
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: theme.palette.text.primary,
                          }}
                        >
                          {highlight.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontWeight: 500,
                fontSize: { xs: '1.2rem', md: '1.4rem' }
              }}
            >
              Ready to bring your vision to life?
            </Typography>
            <Chip
              icon={<Star />}
              label="Let's Collaborate"
              sx={{
                bgcolor: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.1rem',
                px: 3,
                py: 1,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                }
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 