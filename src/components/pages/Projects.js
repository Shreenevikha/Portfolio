import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Stack, 
  CardActions, 
  Button,
  CardMedia,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  FolderOpenIcon,
  GitHub,
  Launch,
  Code,
  Storage,
  Psychology,
  TrendingUp,
  Security
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Healthcare Master Intelligence Dashboard',
    subtitle: 'Data-Driven Healthcare Analytics Platform',
    tech: ['Python', 'Dash', 'Plotly', 'Pandas', 'NumPy'],
    description: 'Designed and developed a comprehensive healthcare analytics dashboard that provides real-time insights for medical decision-making. Features interactive visualizations, predictive analytics, and automated reporting systems.',
    category: 'Data Analytics',
    icon: <TrendingUp />,
    status: 'Completed',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Biz Books - Modern Accounting Platform',
    subtitle: 'Next-Generation Financial Management Tool',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Microservices'],
    description: 'Revolutionary accounting platform with hybrid UI that seamlessly transitions between modern and traditional interfaces. Built with microservices architecture for scalability and real-time financial data processing.',
    category: 'Fintech',
    icon: <Storage />,
    status: 'In Progress',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    subtitle: 'Intelligent Development Workflow Enhancement',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    description: 'Advanced code review system using machine learning to analyze code quality, detect potential bugs, and suggest improvements. Integrates with popular development platforms and provides detailed analytics.',
    category: 'AI/ML',
    icon: <Psychology />,
    status: 'Planning',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Secure Cloud Storage Solution',
    subtitle: 'Enterprise-Grade Data Protection Platform',
    tech: ['AWS', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    description: 'End-to-end encrypted cloud storage solution with advanced security features, real-time collaboration, and automated backup systems. Designed for enterprise-level data protection and compliance.',
    category: 'Security',
    icon: <Security />,
    status: 'Completed',
    image: '/api/placeholder/400/250'
  }
];

const getStatusColor = (status, theme) => {
  switch (status) {
    case 'Completed':
      return theme.palette.success.main;
    case 'In Progress':
      return theme.palette.warning.main;
    case 'Planning':
      return theme.palette.info.main;
    default:
      return theme.palette.grey[500];
  }
};

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Box 
      id="projects" 
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
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 30% 20%, rgba(0, 255, 153, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 255, 153, 0.02) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(30, 64, 175, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(100, 116, 139, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 900,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Portfolio Showcase
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Demonstrating excellence through innovative solutions and cutting-edge technology
            </Typography>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredProject === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredProject === index 
                      ? `0 20px 40px rgba(${theme.palette.primary.main}, 0.3)`
                      : `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                    }
                  }}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
                      p: 3,
                      borderBottom: `1px solid ${theme.palette.divider}`
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {project.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 800,
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            lineHeight: 1.2
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: { xs: '0.9rem', md: '1rem' }
                          }}
                        >
                          {project.subtitle}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Category and Status */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Chip
                        label={project.category}
                        sx={{
                          bgcolor: theme.palette.mode === 'dark' ? '#333' : '#e0ffe6',
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          px: 2
                        }}
                      />
                      <Chip
                        label={project.status}
                        sx={{
                          bgcolor: getStatusColor(project.status, theme) + '20',
                          color: getStatusColor(project.status, theme),
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          px: 2,
                          border: `1px solid ${getStatusColor(project.status, theme)}40`
                        }}
                      />
                    </Stack>
                  </Box>

                  {/* Project Content */}
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        lineHeight: 1.7,
                        mb: 3,
                        fontWeight: 400
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tech Stack */}
                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: '1.1rem'
                        }}
                      >
                        Technologies Used
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.tech.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            icon={<Code sx={{ fontSize: '1rem' }} />}
                            sx={{
                              bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f1f5f9',
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              border: `1px solid ${theme.palette.divider}`,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main + '20',
                                borderColor: theme.palette.primary.main
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  {/* Project Actions */}
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                      <Button
                        variant="contained"
                        startIcon={<GitHub />}
                        sx={{
                          flex: 1,
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '1rem',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
                          }
                        }}
                      >
                        View Code
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Launch />}
                        sx={{
                          flex: 1,
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            borderColor: theme.palette.primary.dark,
                            background: theme.palette.primary.main + '10',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 3,
                fontWeight: 500
              }}
            >
              Interested in collaborating on innovative projects?
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                py: 2,
                px: 4,
                fontWeight: 700,
                fontSize: '1.1rem',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 30px ${theme.palette.primary.main}50`
                }
              }}
            >
              Let's Build Something Amazing
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 