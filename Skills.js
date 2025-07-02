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
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skills = [
  { label: 'Java' }, { label: 'JavaScript' }, { label: 'Python' }, { label: 'MongoDB' }, { label: 'MySQL' }
];
const frameworks = [
  { label: 'Material UI' }, { label: 'React.js' }, { label: 'Next.js' }, { label: 'Bootstrap' }, { label: 'Hibernate' }
];
const tools = [
  { label: 'Git' }, { label: 'Canva' }, { label: 'Postman' }, { label: 'Ms Excel' }, { label: 'VS Code' }, { label: 'Cursor' }, { label: 'Trae' }, { label: 'Draw.io' }
];
const interests = [
  { label: 'Web Development' }, { label: 'NLP' }, { label: 'Cloud Computing' }, { label: 'Gen AI' }, { label: 'Agentic AI' }
];
const strengths = [
  { label: 'Prompt Engineering' }, { label: 'Analytical Skill' }, { label: 'Adaptability' }, { label: 'Communication' }
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
        py: 10,
        background: theme.palette.background.default,
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
            Skills
          </Typography>
        </motion.div>

        <Paper elevation={2} sx={{ p: 4, borderRadius: 3, marginBottom: 4 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Technical Skills:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Chip
                  label={s.label}
                  sx={{
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>Frameworks:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            {frameworks.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Chip
                  label={f.label}
                  sx={{
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>Tools:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            {tools.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Chip
                  label={t.label}
                  sx={{
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>Area Of Interest:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            {interests.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Chip
                  label={a.label}
                  sx={{
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>Strengths:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Chip
                  label={s.label}
                  sx={{
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills; 