import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Awards from './components/Awards';
import Footer from './components/Footer';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#00ff99' : '#1e40af', // Neon green for dark, professional navy blue for light
      light: mode === 'dark' ? '#33ffad' : '#3b82f6',
      dark: mode === 'dark' ? '#00cc7a' : '#1e3a8a',
    },
    secondary: {
      main: mode === 'dark' ? '#00cc88' : '#64748b', // Complementary green for dark, professional slate for light
      light: mode === 'dark' ? '#33d6a0' : '#94a3b8',
      dark: mode === 'dark' ? '#009966' : '#475569',
    },
    ...(mode === 'light'
      ? {
          background: { 
            default: '#f8fafc', // Clean, light background
            paper: '#ffffff' 
          },
          text: { 
            primary: '#0f172a', // Dark navy for text
            secondary: '#475569' // Professional gray
          },
          divider: '#e2e8f0',
        }
      : {
          background: { 
            default: '#000000', // Pure black
            paper: '#111111' 
          },
          text: { 
            primary: '#ffffff', 
            secondary: '#bdbdbd' 
          },
          divider: '#333333',
        }),
  },
  typography: {
    fontFamily: 'Poppins, Inter, Arial, sans-serif',
    h1: { 
      fontWeight: 900, 
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h2: { 
      fontWeight: 800, 
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    h3: { 
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h4: { 
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h5: { 
      fontWeight: 600,
    },
    h6: { 
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  shape: { 
    borderRadius: 16 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'dark' 
            ? '0 4px 20px rgba(0, 255, 153, 0.1)' 
            : '0 4px 20px rgba(30, 64, 175, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 2000 }}>
        <IconButton
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          sx={{ 
            color: theme.palette.primary.main, 
            bgcolor: theme.palette.background.paper, 
            boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
            border: `2px solid ${theme.palette.primary.main}`,
            width: 50,
            height: 50,
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
            },
            transition: 'all 0.3s ease',
          }}
        >
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App; 