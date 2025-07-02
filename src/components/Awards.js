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
    title: 'Python Programming Certification',
    organization: 'Coursera',
    year: '2023',
    description: 'Completed comprehensive Python programming course with hands-on projects.',
    icon: <School />,
  },
  {
    title: 'Web Development Bootcamp',
    organization: 'Udemy',
    year: '2023',
    description: 'Full-stack web development certification covering modern technologies.',
    icon: <Star />,
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
        py: 10,
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
              marginBottom: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc88 100%)`,
                borderRadius: 2,
              },
            }}
          >
            Awards & Certifications
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {awards.map((award, index) => (
            <Grid item xs={12} md={5} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    background: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      borderColor: theme.palette.primary.main,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc88 100%)`,
                    },
                  }}
                >
                  <Stack spacing={3}>
                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc88 100%)`,
                        color: '#000',
                        margin: '0 auto',
                        boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                      }}
                    >
                      {award.icon}
                    </Box>

                    {/* Content */}
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 1,
                          lineHeight: 1.3,
                        }}
                      >
                        {award.title}
                      </Typography>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        {award.organization}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          mb: 2,
                        }}
                      >
                        {award.year}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {award.description}
                      </Typography>
                    </Box>
                  </Stack>
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