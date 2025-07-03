import React from 'react';
import { Box, Typography, Container, Paper, Stack, Chip } from '@mui/material';
import { School, AutoGraph, TrendingUp } from '@mui/icons-material';

const educationData = [
  {
    school: 'SNS College of Technology',
    location: 'Coimbatore, TN',
    degree: 'B.E. Computer Science and Engineering',
    cgpa: '9.02',
    years: '2020 – 2024',
    icon: School,
    color: '#2563eb',
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School',
    location: 'Coimbatore, TN',
    degree: 'Higher Secondary Certificate (HSC)',
    score: '79%',
    years: '2019 – 2020',
    icon: AutoGraph,
    color: '#7c3aed',
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School',
    location: 'Coimbatore, TN',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    score: '92%',
    years: '2017 – 2018',
    icon: TrendingUp,
    color: '#059669',
  },
];

export default function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          fontWeight={700} 
          textAlign="center" 
          sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          EDUCATION
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          textAlign="center" 
          sx={{ mb: 5, fontSize: '1rem' }}
        >
          Academic journey and achievements
        </Typography>
        
        <Stack spacing={3}>
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: edu.color,
                    boxShadow: `0 8px 25px ${edu.color}20`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    bgcolor: edu.color,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: `${edu.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent sx={{ fontSize: '1.25rem', color: edu.color }} />
                  </Box>
                  
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                      <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
                        {edu.school}
                      </Typography>
                      <Chip
                        label={edu.years}
                        size="small"
                        sx={{
                          bgcolor: `${edu.color}10`,
                          color: edu.color,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
                      {edu.location}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontSize: '0.95rem', mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    
                    {(edu.cgpa || edu.score) && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          {edu.cgpa ? 'CGPA:' : 'Score:'}
                        </Typography>
                        <Chip
                          label={edu.cgpa || edu.score}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: edu.color,
                            color: edu.color,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            height: 24,
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
} 