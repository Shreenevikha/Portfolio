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
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <Box textAlign="center">
        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' } }}>
          About Me
        </Typography>
        <Divider sx={{ width: 80, mx: 'auto', mb: 4, borderBottomWidth: 3, borderColor: 'primary.main' }} />
        <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '0.95rem', md: '1.1rem', lg: '1.2rem' } }}>
          I'm a curious technologist with a builder's mindset — driven by challenges, guided by purpose, and fueled by continuous learning. I design scalable solutions not just to solve problems, but to unlock new possibilities and accelerate meaningful progress. I aim to deliver impact-driven, future-ready platforms.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 