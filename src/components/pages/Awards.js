import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import { 
  EmojiEvents,
  School,
  Star
} from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Data Acquisition & Manipulation',
    organization: 'Guvi',
    year: '2023',
    description: 'Certification for Data Acquisition & Manipulation, covering data collection, cleaning, and transformation.',
    icon: <School />,
  },
  {
    title: 'Generative AI',
    organization: 'Guvi',
    year: '2023',
    description: 'Certification in Generative AI, focusing on modern AI techniques and applications.',
    icon: <Star />,
  },
  {
    title: 'Next JS',
    organization: 'Guvi',
    year: '2023',
    description: 'Certification for mastering Next.js and advanced React concepts.',
    icon: <EmojiEvents />,
  },
  {
    title: 'IMUN Online Conference | Campus Ambassador',
    organization: 'IMUN',
    year: '2022',
    description: 'Recognized as a Campus Ambassador for IMUN Online Conference.',
    icon: <EmojiEvents />,
  },
];

const Awards = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="awards"
      sx={{
        py: { xs: 7, md: 10 },
        background: theme.palette.background.paper,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc88 100%)`,
        },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EmojiEvents sx={{ fontSize: 38, color: theme.palette.primary.main, mb: 1 }} />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.7rem', md: '2.2rem', lg: '2.5rem' },
                fontWeight: 900,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, #00cc88)` ,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1.5,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 70,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, #00cc88)` ,
                  borderRadius: 2,
                },
              }}
            >
              Awards & Certifications
            </Typography>
          </Box>
        </motion.div>
        <Grid container spacing={4} justifyContent="center">
          {awards.map((award, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(135deg, #181818 0%, #23272f 100%)'
                      : 'linear-gradient(135deg, #fff 0%, #f3f6fa 100%)',
                    border: `1.5px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 60,
                      minHeight: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc88 100%)`,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 32,
                      boxShadow: `0 4px 16px ${theme.palette.primary.main}30`,
                    }}
                  >
                    {award.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 0.5,
                        fontSize: { xs: '1.08rem', md: '1.18rem' },
                      }}
                    >
                      {award.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 0.5,
                        fontSize: '1rem',
                      }}
                    >
                      {award.organization}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        mb: 0.5,
                        fontSize: '0.92rem',
                      }}
                    >
                      {award.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {award.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards; 