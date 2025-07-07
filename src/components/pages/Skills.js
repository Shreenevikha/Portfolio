import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Paper,
  Stack,
  LinearProgress,
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
} from '@mui/icons-material';

// Professional skill categories with clean design
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code />,
    color: "#3B82F6",
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
    color: "#EF4444",
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
    color: "#10B981",
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Hibernate', level: 70 }
    ]
  }
];

// Professional areas of interest
const areasOfInterest = [
  // { name: 'Web Development', icon: <Code /> },
  { name: 'NLP', icon: <Psychology /> },
  // { name: 'Cloud Computing', icon: <Cloud /> },
  { name: 'Gen AI', icon: <Lightbulb /> },
  { name: 'Agentic AI', icon: <TrendingUp /> }
];

// Professional soft skills
// const softSkills = [
//   { name: 'Prompt Engineering', icon: <Lightbulb /> },
//   { name: 'Analytical Skills', icon: <Psychology /> },
//   { name: 'Adaptability', icon: <TrendingUp /> },
//   { name: 'Communication', icon: <Group /> },
//   { name: 'Problem Solving', icon: <Star /> }
// ];

// Professional tools
const tools = [
  'VS Code', 'Git', 'Postman', 'Canva', 'Ms Excel', 
  'Cursor', 'Trae', 'Draw.io', 'Figma', 'Slack', 'n8n'
];

/**
 * Skills Component - Professional Design
 * Clean, sophisticated layout showcasing technical expertise
 */
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
              Skills & Expertise
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
              A comprehensive overview of my technical capabilities and professional competencies
            </Typography>
          </Box>
        </motion.div>

        {/* Technical Skills Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 4,
              textAlign: 'center',
            }}
          >
            Technical Skills
          </Typography>
          
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {/* Category Header */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      pb: 2,
                      borderBottom: `1px solid ${theme.palette.divider}`
                    }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 1,
                          background: `${category.color}15`,
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
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          fontSize: '1.1rem',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    
                    {/* Skills List */}
                    <Stack spacing={2.5}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            mb: 1
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
                                color: category.color,
                                fontSize: '0.8rem',
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: theme.palette.mode === 'dark' ? '#374151' : '#E5E7EB',
                              '& .MuiLinearProgress-bar': {
                                background: category.color,
                                borderRadius: 2,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Areas of Interest & Soft Skills */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid container spacing={6}>
            {/* Areas of Interest */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 3,
                  }}
                >
                  Areas of Interest
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    {areasOfInterest.map((area, index) => (
                      <Grid item xs={6} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 1,
                            background: theme.palette.mode === 'dark' ? '#1F2937' : '#F9FAFB',
                            border: `1px solid ${theme.palette.divider}`,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              color: theme.palette.primary.main,
                              mr: 1.5,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {area.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              color: theme.palette.text.primary,
                              fontSize: '0.85rem',
                            }}
                          >
                            {area.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            {/* Soft Skills */}
            {/* <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 3,
                  }}
                >
                  Professional Skills
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    {softSkills.map((skill, index) => (
                      <Grid item xs={6} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 1,
                            background: theme.palette.mode === 'dark' ? '#1F2937' : '#F9FAFB',
                            border: `1px solid ${theme.palette.divider}`,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              color: theme.palette.secondary.main,
                              mr: 1.5,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {skill.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              color: theme.palette.text.primary,
                              fontSize: '0.85rem',
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid> */}
          </Grid>
        </Box>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 4,
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
                     transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                   >
                     <Box
                       sx={{
                         px: 3,
                         py: 1.5,
                         borderRadius: 2,
                         background: theme.palette.mode === 'dark' ? '#1F2937' : '#F9FAFB',
                         border: `1px solid ${theme.palette.divider}`,
                         transition: 'all 0.2s ease',
                         cursor: 'pointer',
                         display: 'flex',
                         alignItems: 'center',
                         gap: 1,
                         '&:hover': {
                           background: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
                           borderColor: theme.palette.primary.main,
                         },
                       }}
                     >
                       <Star sx={{ 
                         fontSize: '1rem', 
                         color: theme.palette.primary.main 
                       }} />
                       <Typography
                         variant="body2"
                         sx={{
                           fontWeight: 500,
                           color: theme.palette.text.primary,
                           fontSize: '0.9rem',
                         }}
                       >
                         {tool}
                       </Typography>
                     </Box>
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