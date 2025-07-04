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
  useMediaQuery,
  Paper,
  Avatar,
} from '@mui/material';
import { 
  FolderOpenIcon,
  GitHub,
  Launch,
  Code,
  Storage,
  Psychology,
  TrendingUp,
  Security,
  AccountBalance,
  Dashboard,
  Api,
  Web,
  Star,
  Visibility,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Biz Books - Modern Accounting Platform',
    subtitle: 'Next-Generation Financial Management Tool',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'API Integration', 'UI/UX Design'],
    description: 'Currently developing a revolutionary accounting platform with hybrid UI that seamlessly transitions between modern and traditional interfaces. Built with MERN stack architecture for scalability and real-time financial data processing. Features include comprehensive ERP functionality, user-friendly interface design, and advanced API integration.',
    category: 'Fintech',
    icon: <AccountBalance />,
    status: 'In Progress',
    image: '/api/placeholder/400/250',
    github: 'https://github.com/yourusername/bizbooks',
    demo: 'https://bizbooks-demo.com',
    likes: 45,
    views: 1200,
    featured: true,
  },
  {
    title: 'Healthcare Analytics Dashboard',
    subtitle: 'Data-Driven Medical Intelligence Platform',
    tech: ['Python', 'Dash', 'Plotly', 'Pandas', 'NumPy', 'Data Visualization'],
    description: 'Designed and developed a comprehensive healthcare analytics dashboard that provides real-time insights for medical decision-making. Features interactive visualizations, predictive analytics, automated reporting systems, and data-driven insights for healthcare professionals.',
    category: 'Data Analytics',
    icon: <Dashboard />,
    status: 'Completed',
    image: '/api/placeholder/400/250',
    github: 'https://github.com/yourusername/healthcare-dashboard',
    demo: 'https://healthcare-demo.com',
    likes: 78,
    views: 2100,
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Online Shopping Solution',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'JWT'],
    description: 'Built a complete e-commerce platform with user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Implemented responsive design and optimized for performance.',
    category: 'E-Commerce',
    icon: <Web />,
    status: 'Completed',
    image: '/api/placeholder/400/250',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    likes: 92,
    views: 3400,
    featured: false,
  },
  {
    title: 'Task Management App',
    subtitle: 'Collaborative Project Management Tool',
    tech: ['React', 'Firebase', 'Material-UI', 'Real-time Updates', 'PWA'],
    description: 'Developed a real-time task management application with collaborative features, drag-and-drop functionality, and offline capabilities. Includes team collaboration, progress tracking, and notification systems.',
    category: 'Productivity',
    icon: <TrendingUp />,
    status: 'Completed',
    image: '/api/placeholder/400/250',
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
    likes: 56,
    views: 1800,
    featured: false,
  },
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
        py: { xs: 6, md: 10 }, 
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.mode === 'dark' ? '#0a0a0a' : '#f8fafc'} 100%)`,
        position: 'relative',
        minHeight: '100vh',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        },
        '&::after': {
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 900,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
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
              Portfolio Showcase
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.5,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
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
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredProject === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredProject === index 
                      ? `0 20px 40px rgba(${theme.palette.primary.main}, 0.25)`
                      : `0 4px 20px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.2' : '0.08'})`,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                    },
                    position: 'relative',
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: '#fff',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                      }}
                    >
                      FEATURED
                    </Box>
                  )}

                  {/* Project Header */}
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
                      p: 3,
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      position: 'relative',
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: '#fff',
                          width: 56,
                          height: 56,
                          boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                        }}
                      >
                        {project.icon}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 700,
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            lineHeight: 1.2
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                            lineHeight: 1.3
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
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          px: 1.5,
                          py: 0.5
                        }}
                      />
                      <Chip
                        label={project.status}
                        sx={{
                          bgcolor: getStatusColor(project.status, theme) + '15',
                          color: getStatusColor(project.status, theme),
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          px: 1.5,
                          py: 0.5,
                          border: `1px solid ${getStatusColor(project.status, theme)}30`
                        }}
                      />
                    </Stack>

                    {/* Stats */}
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Favorite sx={{ fontSize: '1rem', color: theme.palette.secondary.main }} />
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {project.likes}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Visibility sx={{ fontSize: '1rem', color: theme.palette.primary.main }} />
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {project.views}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>

                  {/* Project Content */}
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                        lineHeight: 1.6,
                        mb: 3,
                        fontWeight: 400
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tech Stack */}
                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        Technologies Used
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.tech.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            icon={<Code sx={{ fontSize: '0.9rem' }} />}
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
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          flex: 1,
                          py: 1.5,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                            transform: 'translateY(-1px)',
                            boxShadow: `0 6px 20px ${theme.palette.primary.main}30`
                          }
                        }}
                      >
                        View Code
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Launch />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          flex: 1,
                          py: 1.5,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            borderColor: theme.palette.primary.dark,
                            background: theme.palette.primary.main + '08',
                            transform: 'translateY(-1px)'
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
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
                  : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#e2e8f0'}`,
                borderRadius: 4,
                boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
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
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
                  }
                }}
              >
                Let's Build Something Amazing
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 