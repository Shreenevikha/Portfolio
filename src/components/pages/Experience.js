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
    description: `Currently developing a modern accountant tool as part of a fintech project, combining traditional features with a user-friendly interface. Hands-on with the MERN stack, focusing on full-stack development. Actively expanding knowledge in Gen AI automation, and intelligent system integration to future-proof the platform.`,
    technologies: ['MERN Stack', 'API Integration', 'UI/UX Design', 'Gen AI', 'Fintech'],
  },
  {
    title: 'Learning and Development',
    company: 'Skillzin Technologies, Coimbatore',
    period: 'Jan 2024 – June 2024',
    description: `Upgrading my technical skills by learning servlets and Java Server Pages (JSP) to enhance my developing skills.`,
    technologies: ['Java', 'Servlets', 'JSP' ,'MY SQL'],
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
        py: { xs: 6, md: 10 },
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' },
                fontWeight: 800,
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
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  borderRadius: 2,
                },
              }}
            >
              Work Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.5,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' }
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
              left: { xs: 16, md: '50%' },
              top: 0,
              bottom: 0,
              width: 3,
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
                  mb: 5,
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                }}
              >
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: index % 2 === 0 ? 'right' : 'left' },
                      pr: { md: index % 2 === 0 ? 3 : 0 },
                      pl: { md: index % 2 === 0 ? 0 : 3 },
                    }}
                  >
                    <Chip
                      label={exp.period}
                      sx={{
                        bgcolor: theme.palette.primary.main + '15',
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        mb: 2,
                        px: 1.5,
                        py: 0.5,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                        color: theme.palette.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        fontWeight: 500,
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                        lineHeight: 1.4,
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
                        p: 2.5,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: 'white',
                        width: 70,
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 6px 24px ${theme.palette.primary.main}30`,
                        border: '2px solid white',
                      }}
                    >
                      <WorkIcon sx={{ fontSize: '1.75rem' }} />
                    </Paper>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, sm: 3.5, md: 4 },
                      background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                      position: 'relative',
                      boxShadow: `0 6px 24px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.25' : '0.08'})`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        borderRadius: '3px 3px 0 0',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' },
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                        mb: 2.5,
                        fontWeight: 400,
                      }}
                    >
                      {exp.description}
                    </Typography>
                    
                    {exp.technologies && (
                      <Box sx={{ mt: 2.5 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 1.5,
                            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                          }}
                        >
                          Technologies Used:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                          {exp.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              sx={{
                                bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f1f5f9',
                                color: theme.palette.text.primary,
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                border: `1px solid ${theme.palette.divider}`,
                                px: 1,
                                py: 0.25,
                                '&:hover': {
                                  bgcolor: theme.palette.primary.main + '15',
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