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
    title: "Tools & Platforms",
    icon: <Build />,
    color: "#ffd93d",
    skills: [
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 }
    ]
  },
  {
    title: "Areas of Interest",
    icon: <TrendingUp />,
    color: "#4ecdc4",
    skills: [
      { name: 'Web Development', level: 95 },
      { name: 'NLP', level: 80 },
      { name: 'Cloud Computing', level: 85 },
      { name: 'Gen AI', level: 75 },
      { name: 'Agentic AI', level: 70 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Psychology />,
    color: "#ff8585",
    skills: [
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Analytical Skills', level: 90 },
      { name: 'Adaptability', level: 95 },
      { name: 'Communication', level: 85 },
      { name: 'Problem Solving', level: 90 }
    ]
  }
];

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="skills"
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
      <Container maxWidth="xl">
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
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
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
              Technical Proficiency
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Advanced technical capabilities and industry expertise
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
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
                    transition: 'all 0.3s ease',
                    boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 16px 48px rgba(${category.color}, 0.2)`,
                      borderColor: category.color,
                    }
                  }}
                >
                  {/* Category Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: category.color + '20',
                        color: category.color,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1.2rem', md: '1.4rem' },
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  {/* Skills List */}
                  <Stack spacing={3}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                fontSize: { xs: '0.85rem', md: '0.9rem' },
                                color: theme.palette.text.primary,
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                fontSize: { xs: '0.85rem', md: '0.9rem' },
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
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#e2e8f0',
                              '& .MuiLinearProgress-bar': {
                                background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
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
                  Additional Tools & Technologies
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
                {['Canva', 'Ms Excel', 'Cursor', 'Trae', 'Draw.io', 'Figma', 'Jira', 'Slack'].map((tool, index) => (
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