import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
  Chip,
} from '@mui/material';
import { Work as WorkIcon } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Junior Software Associate',
    company: 'SNS INNOVATION HUB, Coimbatore',
    period: 'July 2024 – Present',
    description: `Currently developing a modern accountant tool as part of a fintech project, combining traditional ERP features with a user-friendly interface. Hands-on with the MERN stack, focusing on full-stack development, API integration, and wireframing. Continuously learning through self-driven research, API documentation, UI/UX design, and fintech domain understanding. Actively expanding knowledge in Gen AI automation, and intelligent system integration to future-proof the platform.`,
  },
  {
    title: 'Learning and Development',
    company: 'Skillzin Technologies, Coimbatore',
    period: 'Jan 2024 – June 2024',
    description: `Upgrading my technical skills by learning servlets and Java Server Pages (JSP) to enhance my developing skills.`,
  },
];

const Experience = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="experience"
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
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                borderRadius: 2,
              },
            }}
          >
            Experience
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: 2,
              transform: { xs: 'none', md: 'translateX(-50%)' },
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  mb: 4,
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                }}
              >
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: index % 2 === 0 ? 'right' : 'left' },
                      pr: { md: index % 2 === 0 ? 4 : 0 },
                      pl: { md: index % 2 === 0 ? 0 : 4 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: 'white',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <WorkIcon />
                    </Paper>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      background: theme.palette.background.default,
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.divider}`,
                      position: 'relative',
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
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 