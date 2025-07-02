import React from 'react';
import { Box, Container, Typography, Stack, Paper, Divider, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';

const education = [
  {
    school: 'SNS College of Technology, Coimbatore, TN',
    degree: 'B.E. Computer Science and Engineering',
    cgpa: 'CGPA: 9.02',
    period: '2020 – 2024',
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School, Coimbatore, TN',
    degree: 'HSC',
    cgpa: 'Score: 79%',
    period: '2019 – 2020',
  },
  {
    school: 'Vijayalakshmi Matric Hr. Sec. School, Coimbatore, TN',
    degree: 'SSLC',
    cgpa: 'Score: 92%',
    period: '2017 – 2018',
  },
];

const Education = () => {
  const theme = useTheme();
  return (
    <Box id="education" sx={{ py: 10, background: theme.palette.background.default }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ color: 'primary.main', mb: 6 }}>
          Education
        </Typography>
        <Stack spacing={5} sx={{ position: 'relative', pl: 3 }}>
          {education.map((edu, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
              {/* Timeline dot */}
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: '#111',
                  width: 32,
                  height: 32,
                  position: 'absolute',
                  left: -40,
                  top: 16,
                  boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <SchoolIcon />
              </Avatar>
              {/* Card */}
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  flex: 1,
                  background: theme.palette.background.paper,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 2px 16px 0 ${theme.palette.primary.main}22`,
                  ml: 4,
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{edu.school}</Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                    {edu.period}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {edu.degree} <span style={{ color: theme.palette.primary.main, fontWeight: 500 }}>{edu.cgpa}</span>
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education; 