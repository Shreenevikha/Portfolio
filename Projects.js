import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, CardActions, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const projects = [
  {
    title: 'Healthcare Master Intelligence Dashboard',
    tech: ['Python', 'Dash', 'Plotly'],
    description: 'Designed a dashboard to enhance data-driven and decision-making in the health care sector.',
  },
  {
    title: 'Fintech Project: Accounting Tool – In Progress',
    tech: ['MERN Stack', 'Microservices'],
    description: 'Biz Books offers a unique toggle button that lets users effortlessly switch between a modern, sleek interface and a traditional, familiar layout. This hybrid approach ensures comfort for users transitioning from legacy tools like Tally while embracing modern fintech innovations.',
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <Box id="projects" sx={{ py: 10, background: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ color: 'primary.main', mb: 6 }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  boxShadow: `0 4px 32px 0 ${theme.palette.primary.main}33`,
                  border: `1.5px solid ${theme.palette.primary.main}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: `0 8px 40px 0 ${theme.palette.primary.main}99`,
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                    <FolderOpenIcon sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {proj.title}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                    {proj.tech.map((t, i) => (
                      <Chip
                        key={i}
                        label={t}
                        sx={{
                          bgcolor: theme.palette.mode === 'dark' ? '#222' : '#e0ffe6',
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      flexGrow: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {proj.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* Add project links if available */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 