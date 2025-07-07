import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Paper,
  Stack,
  Chip,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Tooltip,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Code,
  Psychology,
  TrendingUp,
  Star,
  Brush,
  Storage,
  Cloud,
  Lightbulb,
  Group,
  Web,
  DataObject,
  Api,
  Security,
  Speed,
  Palette,
  Build,
  School,
  Work,
  Computer,
  StorageOutlined,
  WebOutlined,
} from '@mui/icons-material';

// Professional skill categories
const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Core development languages",
    icon: <Code />,
    color: "#1976d2",
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
    subtitle: "Modern web development",
    icon: <WebOutlined />,
    color: "#1976d2",
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
    subtitle: "Server-side technologies",
    icon: <StorageOutlined />,
    color: "#1976d2",
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Hibernate', level: 70 }
    ]
  }
];

// Professional areas of expertise
const areasOfExpertise = [
  { 
    name: 'Natural Language Processing', 
    shortName: 'NLP',
    icon: <Psychology />, 
    description: 'AI language understanding and processing',
  },
  { 
    name: 'Generative AI', 
    shortName: 'Generative AI',
    icon: <Lightbulb />, 
    description: 'Creative AI systems and applications',
  },
  { 
    name: 'Agentic AI', 
    shortName: 'Agentic AI',
    icon: <TrendingUp />, 
    description: 'Autonomous AI agents and systems',
  }
];

// Professional tools and technologies
const tools = [
  { name: 'VS Code', category: 'Development' },
  { name: 'Git', category: 'Version Control' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'Canva', category: 'Design' },
  { name: 'MS Excel', category: 'Data Analysis' },
  { name: 'Cursor', category: 'Development' },
  { name: 'Trae', category: 'Development' },
  { name: 'Draw.io', category: 'Diagramming' },
  { name: 'Figma', category: 'Design' },
  { name: 'Slack', category: 'Communication' },
  { name: 'n8n', category: 'Automation' }
];

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSkillColor = (level) => {
    if (level >= 90) return theme.palette.success.main;
    if (level >= 80) return theme.palette.primary.main;
    if (level >= 70) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Professional Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Technical Skills
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Comprehensive technical expertise across modern development technologies
            </Typography>
          </Box>
        </motion.div>

        {/* Technical Skills Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 6,
                textAlign: 'center',
              }}
            >
              Core Competencies
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: theme.shadows[4],
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {/* Category Header */}
                    <Box sx={{ p: 3, borderBottom: `1px solid ${theme.palette.divider}` }}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                          sx={{
                            background: theme.palette.primary.main,
                            color: '#fff',
                            width: 48,
                            height: 48,
                          }}
                        >
                          {category.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              fontSize: '1.1rem',
                              mb: 0.5,
                            }}
                          >
                            {category.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: '0.85rem',
                            }}
                          >
                            {category.subtitle}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                    
                    {/* Skills List */}
                    <Box sx={{ p: 3 }}>
                      <Stack spacing={3}>
                        {category.skills.map((skill, skillIndex) => (
                          <Box key={skillIndex}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              mb: 1.5
                            }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 500,
                                  color: theme.palette.text.primary,
                                  fontSize: '0.9rem',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontWeight: 600,
                                  color: getSkillColor(skill.level),
                                  fontSize: '0.8rem',
                                }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: 4,
                                background: theme.palette.mode === 'dark' ? '#374151' : '#E5E7EB',
                                borderRadius: 2,
                                overflow: 'hidden',
                                position: 'relative',
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                style={{
                                  height: '100%',
                                  background: getSkillColor(skill.level),
                                  borderRadius: 2,
                                }}
                              />
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Areas of Expertise */}
        {/* <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 6,
                textAlign: 'center',
              }}
            >
              Areas of Expertise
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {areasOfExpertise.map((area, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      '&:hover': {
                        boxShadow: theme.shadows[4],
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        background: theme.palette.primary.main,
                        color: '#fff',
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {area.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
                      {area.shortName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {area.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box> */}

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 6,
                textAlign: 'center',
              }}
            >
              Tools & Technologies
            </Typography>
            
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                }}
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  >
                    <Tooltip title={tool.category} placement="top">
                      <Chip
                        label={tool.name}
                        sx={{
                          px: 2,
                          py: 1,
                          background: theme.palette.background.default,
                          border: `1px solid ${theme.palette.divider}`,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            background: theme.palette.action.hover,
                            borderColor: theme.palette.primary.main,
                          },
                          '& .MuiChip-label': {
                            fontWeight: 500,
                            fontSize: '0.9rem',
                          }
                        }}
                      />
                    </Tooltip>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 