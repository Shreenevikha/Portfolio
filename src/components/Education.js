import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Paper, 
  Avatar,
  Chip,
  useTheme
} from '@mui/material';
import { 
  School as SchoolIcon,
  Grade,
  CalendarToday,
  LocationOn
} from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'SNS College of Technology',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'B.E. Computer Science and Engineering',
    cgpa: '9.02',
    period: '2020 – 2024',
    achievements: ['First Class with Distinction', 'Dean\'s List', 'Technical Projects'],
    description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern development technologies.'
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'Higher Secondary Certificate (HSC)',
    cgpa: '79%',
    period: '2019 – 2020',
    achievements: ['Science Stream', 'Mathematics Excellence'],
    description: 'Completed higher secondary education with focus on science and mathematics.'
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    cgpa: '92%',
    period: '2017 – 2018',
    achievements: ['Outstanding Academic Performance', 'School Topper'],
    description: 'Excellent academic performance with outstanding scores in all subjects.'
  },
];

const Education = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box 
      id="education" 
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
              Academic Background
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
              Educational journey and academic achievements
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 35, md: 50 },
              top: 0,
              bottom: 0,
              width: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: 2,
            }}
          />

          <Stack spacing={4}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Timeline dot */}
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      width: 50,
                      height: 50,
                      position: 'absolute',
                      left: { xs: -25, md: -25 },
                      top: 20,
                      boxShadow: `0 0 0 6px ${theme.palette.background.default}`,
                      border: `3px solid ${theme.palette.primary.main}`,
                      zIndex: 2,
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: '1.5rem' }} />
                  </Avatar>

                  {/* Card */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 4,
                      flex: 1,
                      ml: { xs: 4, md: 6 },
                      background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                      border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                      position: 'relative',
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
                    {/* Header */}
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              fontWeight: 800, 
                              color: theme.palette.text.primary,
                              fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
                              mb: 1
                            }}
                          >
                            {edu.school}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn sx={{ color: theme.palette.text.secondary, fontSize: '1.2rem', mr: 1 }} />
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                color: theme.palette.text.secondary,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: 500
                              }}
                            >
                              {edu.location}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip
                          icon={<CalendarToday />}
                          label={edu.period}
                          sx={{
                            bgcolor: theme.palette.primary.main + '20',
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            px: 2,
                          }}
                        />
                      </Stack>

                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700, 
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                          mb: 2
                        }}
                      >
                        {edu.degree}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Grade sx={{ color: theme.palette.success.main, fontSize: '1.5rem', mr: 1 }} />
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: theme.palette.success.main,
                            fontWeight: 800,
                            fontSize: { xs: '1.1rem', md: '1.2rem' }
                          }}
                        >
                          CGPA: {edu.cgpa}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.7,
                        mb: 3,
                        fontWeight: 400
                      }}
                    >
                      {edu.description}
                    </Typography>

                    {/* Achievements */}
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                      >
                        Key Achievements:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <Chip
                            key={achievementIndex}
                            label={achievement}
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
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Education; 