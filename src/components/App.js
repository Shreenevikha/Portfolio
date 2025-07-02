import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Awards from './Awards';
import Footer from './Footer';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#00d4ff' : '#2563eb', // Vibrant cyan for dark, modern blue for light
      light: mode === 'dark' ? '#33ddff' : '#3b82f6',
      dark: mode === 'dark' ? '#00a3cc' : '#1d4ed8',
    },
    secondary: {
      main: mode === 'dark' ? '#ff6b6b' : '#dc2626', // Coral red for dark, vibrant red for light
      light: mode === 'dark' ? '#ff8585' : '#ef4444',
      dark: mode === 'dark' ? '#cc5555' : '#b91c1c',
    },
    success: {
      main: mode === 'dark' ? '#00ff88' : '#059669',
      light: mode === 'dark' ? '#33ffa3' : '#10b981',
      dark: mode === 'dark' ? '#00cc6a' : '#047857',
    },
    warning: {
      main: mode === 'dark' ? '#ffd93d' : '#d97706',
      light: mode === 'dark' ? '#ffe066' : '#f59e0b',
      dark: mode === 'dark' ? '#ccad31' : '#b45309',
    },
    info: {
      main: mode === 'dark' ? '#4ecdc4' : '#0891b2',
      light: mode === 'dark' ? '#71d7d0' : '#06b6d4',
      dark: mode === 'dark' ? '#3ea49d' : '#0e7490',
    },
    ...(mode === 'light'
      ? {
          background: { 
            default: '#fafbfc', // Clean, light background with subtle blue tint
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
            default: '#0a0a0a', // Deep dark background
            paper: '#1a1a1a' 
          },
          text: { 
            primary: '#ffffff', 
            secondary: '#a1a1aa' 
          },
          divider: '#27272a',
        }),
  },
  typography: {
    fontFamily: 'Poppins, Inter, Arial, sans-serif',
    h1: { 
      fontWeight: 900, 
      fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      lineHeight: 1.1,
    },
    h2: { 
      fontWeight: 800, 
      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      lineHeight: 1.2,
    },
    h3: { 
      fontWeight: 700,
      fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
      letterSpacing: '0.02em',
      lineHeight: 1.3,
    },
    h4: { 
      fontWeight: 700,
      fontSize: { xs: '1.5rem', md: '2rem', lg: '2.25rem' },
      letterSpacing: '0.01em',
      lineHeight: 1.4,
    },
    h5: { 
      fontWeight: 600,
      fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
      lineHeight: 1.4,
    },
    h6: { 
      fontWeight: 600,
      fontSize: { xs: '1.1rem', md: '1.25rem', lg: '1.5rem' },
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
      fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' },
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 700,
      fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
      textTransform: 'none',
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
          fontWeight: 700,
          borderRadius: 16,
          padding: '12px 24px',
          fontSize: '1.1rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${mode === 'dark' ? '#00d4ff' : '#2563eb'} 0%, ${mode === 'dark' ? '#ff6b6b' : '#dc2626'} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${mode === 'dark' ? '#00a3cc' : '#1d4ed8'} 0%, ${mode === 'dark' ? '#cc5555' : '#b91c1c'} 100%)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: mode === 'dark' 
            ? '0 8px 32px rgba(0, 212, 255, 0.15)' 
            : '0 8px 32px rgba(37, 99, 235, 0.12)',
          border: `1px solid ${mode === 'dark' ? '#333' : '#e2e8f0'}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.95rem',
          fontWeight: 600,
          borderRadius: 12,
          padding: '8px 16px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '0.01em',
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