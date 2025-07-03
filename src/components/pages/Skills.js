import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  useTheme,
  Paper,
  Stack,
  LinearProgress,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Code,
  Build,
  Psychology,
  TrendingUp,
  School,
  Star,
  Computer,
  Brush,
  Storage,
  Cloud,
  PsychologyAlt,
  Lightbulb,
} from '@mui/icons-material';

const badgeIcons = {
  'Web Development': <Lightbulb sx={{ fontSize: 18 }} />, // Example icons
  'NLP': <PsychologyAlt sx={{ fontSize: 18 }} />,
  'Cloud Computing': <Cloud sx={{ fontSize: 18 }} />,
  'Gen AI': <Star sx={{ fontSize: 18 }} />,
  'Agentic AI': <Star sx={{ fontSize: 18 }} />,
  'Prompt Engineering': <Lightbulb sx={{ fontSize: 18 }} />,
  'Analytical Skills': <Star sx={{ fontSize: 18 }} />,
  'Adaptability': <Star sx={{ fontSize: 18 }} />,
  'Communication': <Star sx={{ fontSize: 18 }} />,
  'Problem Solving': <Star sx={{ fontSize: 18 }} />,
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code />,
    color: "#00d4ff",
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    title: "Frontend Technologies",
    icon: <Brush />,
    color: "#ff6b6b",
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Material UI', level: 85 },
      { name: 'Bootstrap', level: 75 },
      { name: 'HTML/CSS', level: 95 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: <Storage />,
    color: "#00ff88",
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Hibernate', level: 70 }
    ]
  },
  
  {
    title: "Areas of Interest",
    icon: <TrendingUp />,
    color: "#4ecdc4",
    skills: [
      { name: 'Web Development' },
      { name: 'NLP' },
      { name: 'Cloud Computing' },
      { name: 'Gen AI' },
      { name: 'Agentic AI' }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Psychology />,
    color: "#ff8585",
    skills: [
      { name: 'Prompt Engineering' },
      { name: 'Analytical Skills' },
      { name: 'Adaptability' },
      { name: 'Communication' },
      { name: 'Problem Solving' }
    ]
  }
];

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper to check if category is badge board
  const isBadgeBoard = (title) =>
    title === 'Soft Skills' || title === 'Areas of Interest';

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 7, md: 10 },
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
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.7rem', md: '2.2rem', lg: '2.5rem' },
                fontWeight: 900,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                },
              }}
            >
              My Skills
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.5,
                fontSize: { xs: '0.95rem', md: '1.05rem' }
              }}
            >
              A quick glance at my technical and professional strengths
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: { xs: 2, md: 4 } }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} md={4} key={categoryIndex}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 8,
                  background: theme.palette.mode === 'dark'
                    ? '#111'
                    : '#fff',
                  border: `3px solid ${theme.palette.mode === 'dark' ? '#fff' : '#222'}`,
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  minHeight: 200,
                  mb: 3,
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                {/* Title bar */}
                <Box sx={{
                  width: '100%',
                  background: theme.palette.mode === 'dark' ? '#222' : '#f3f3f3',
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  px: 2,
                  py: 1,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Box
                    sx={{
                      p: 1.2,
                      borderRadius: 2,
                      background: theme.palette.mode === 'dark' ? '#23272f' : '#e0e0e0',
                      color: category.color,
                      mr: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      fontSize: { xs: '1.1rem', md: '1.18rem' },
                      letterSpacing: '0.04em',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%' }}>
                  {['Soft Skills', 'Areas of Interest'].includes(category.title) ? (
                    <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          icon={badgeIcons[skill.name] || <Star sx={{ fontSize: 18 }} />}
                          label={skill.name}
                          sx={{
                            bgcolor: theme.palette.mode === 'dark' ? '#23272f' : '#f3f6fa',
                            color: category.color,
                            fontWeight: 600,
                            fontSize: '1rem',
                            borderRadius: 99,
                            px: 2.2,
                            py: 1.2,
                            mb: 1.2,
                            mr: 1.2,
                            border: `1.5px solid ${category.color}33`,
                          }}
                        />
                      ))}
                    </Stack>
                  ) : (
                    <Stack spacing={2}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                fontSize: { xs: '0.93rem', md: '1rem' },
                                color: theme.palette.text.primary,
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                color: category.color,
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 5,
                              borderRadius: 3,
                              backgroundColor: theme.palette.mode === 'dark' ? '#23272f' : '#e2e8f0',
                              '& .MuiLinearProgress-bar': {
                                background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                  : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                   Tools & Technologies
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    maxWidth: 600,
                    mx: 'auto',
                  }}
                >
                  Proficient in a wide range of development tools and platforms
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
                {['VS Code ','Git','Postman', 'Canva', 'Ms Excel', 'Cursor', 'Trae', 'Draw.io', 'Figma','Slack','n8n'].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  >
                    <Chip
                      label={tool}
                      icon={<Star sx={{ fontSize: '1rem' }} />}
                      sx={{
                        bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f1f5f9',
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        border: `1px solid ${theme.palette.divider}`,
                        px: 2,
                        py: 1,
                        '&:hover': {
                          bgcolor: theme.palette.primary.main + '20',
                          borderColor: theme.palette.primary.main,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 