import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Typography,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Home, Work, School, Code, Psychology, EmojiEvents, ContactMail } from '@mui/icons-material';
import { Link } from 'react-scroll';
import '../css/nav-clean.css';

const navItems = [
  { name: 'Home', to: 'hero', icon: <Home /> },
  { name: 'Experience', to: 'experience', icon: <Work /> },
  { name: 'Education', to: 'education', icon: <School /> },
  { name: 'Projects', to: 'projects', icon: <Code /> },
  { name: 'Skills', to: 'skills', icon: <Psychology /> },
  { name: 'Awards', to: 'awards', icon: <EmojiEvents /> },
  { name: 'Contact', to: 'contact', icon: <ContactMail /> },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          color: theme.palette.primary.main,
          mb: 3,
                          fontSize: '1.2rem',
        }}
      >
        SHREENEVIKHA N
      </Typography>
      {navItems.map((item, idx) => (
        <React.Fragment key={item.name}>
          <Button
            startIcon={item.icon}
            fullWidth
            variant="text"
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              color: activeSection === item.to ? 'primary.main' : theme.palette.text.primary,
              fontWeight: 600,
              fontSize: '0.95rem',
              px: 3,
              py: 2,
              borderRadius: 0,
              background: 'none !important',
              boxShadow: 'none !important',
              border: 'none',
              borderBottom: activeSection === item.to ? '2.5px solid' : '2.5px solid transparent',
              borderColor: activeSection === item.to ? 'primary.main' : 'transparent',
              transition: 'color 0.2s, border-bottom 0.2s',
              '&:hover': {
                color: 'primary.main',
                background: 'none !important',
                borderBottom: '2.5px solid',
                borderColor: 'primary.main',
                boxShadow: 'none !important',
              },
              '&:active': {
                background: 'none !important',
                boxShadow: 'none !important',
              },
              '& .MuiTouchRipple-root': {
                display: 'none',
              },
            }}
            onClick={() => { handleNavClick(item.to); document.getElementById(item.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
          >
            {item.name}
          </Button>
          {idx < navItems.length - 1 && (
            <Box sx={{ width: '80%', height: 1, bgcolor: 'divider', mx: 'auto' }} />
          )}
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: 'transparent !important',
            backdropFilter: 'none',
            borderBottom: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease',
            zIndex: 1200,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
              {/* Logo/Brand */}
              

              {/* Desktop Navigation */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    startIcon={item.icon}
                    variant="text"
                    disableRipple
                    sx={{
                                          color: activeSection === item.to ? 'primary.main' : theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 2.5,
                      py: 1.2,
                      borderRadius: 0,
                      background: 'none !important',
                      boxShadow: 'none !important',
                      border: 'none',
                      borderBottom: activeSection === item.to ? '2.5px solid' : '2.5px solid transparent',
                      borderColor: activeSection === item.to ? 'primary.main' : 'transparent',
                      transition: 'color 0.2s, border-bottom 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                        background: 'none !important',
                        borderBottom: '2.5px solid',
                        borderColor: 'primary.main',
                        boxShadow: 'none !important',
                      },
                      '&:active': {
                        background: 'none !important',
                        boxShadow: 'none !important',
                      },
                      '& .MuiTouchRipple-root': {
                        display: 'none',
                      },
                    }}
                    onClick={() => { handleNavClick(item.to); document.getElementById(item.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  color: scrolled ? theme.palette.text.primary : 'white',
                  background: 'transparent !important',
                  border: 'none',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    background: 'none !important',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)'
              : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 