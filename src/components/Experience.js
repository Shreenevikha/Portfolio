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
    technologies: ['MERN Stack', 'API Integration', 'UI/UX Design', 'Gen AI', 'Fintech'],
  },
  {
    title: 'Learning and Development',
    company: 'Skillzin Technologies, Coimbatore',
    period: 'Jan 2024 – June 2024',
    description: `Upgrading my technical skills by learning servlets and Java Server Pages (JSP) to enhance my developing skills.`,
    technologies: ['Java', 'Servlets', 'JSP', 'Web Development'],
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
              Work Experience
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
              Professional journey and career milestones
            </Typography>
          </Box>
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
                spacing={4}
                sx={{
                  mb: 6,
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
                    <Chip
                      label={exp.period}
                      sx={{
                        bgcolor: theme.palette.primary.main + '20',
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        mb: 2,
                        px: 2,
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 2,
                        fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
                        color: theme.palette.text.primary,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
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
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: 'white',
                        width: 80,
                        height: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                        border: '3px solid white',
                      }}
                    >
                      <WorkIcon sx={{ fontSize: '2rem' }} />
                    </Paper>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 4, md: 5 },
                      background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                      borderRadius: 4,
                      border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                      position: 'relative',
                      boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '6px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        borderRadius: '4px 4px 0 0',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.3rem' },
                        lineHeight: 1.8,
                        color: theme.palette.text.primary,
                        mb: 3,
                        fontWeight: 400,
                      }}
                    >
                      {exp.description}
                    </Typography>
                    
                    {exp.technologies && (
                      <Box sx={{ mt: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }}
                        >
                          Technologies Used:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              sx={{
                                bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f1f5f9',
                                color: theme.palette.text.primary,
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                border: `1px solid ${theme.palette.divider}`,
                                '&:hover': {
                                  bgcolor: theme.palette.primary.main + '20',
                                  borderColor: theme.palette.primary.main,
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
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