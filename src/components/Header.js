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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          color: theme.palette.primary.main,
          mb: 3,
          fontSize: '1.5rem',
        }}
      >
        SHREENEVIKHA N
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleNavClick(item.to)}
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                      {item.icon}
                    </Box>
                    {item.name}
                  </Box>
                }
                sx={{
                  textAlign: 'center',
                  '& .MuiListItemText-primary': {
                    color: activeSection === item.to ? theme.palette.primary.main : theme.palette.text.primary,
                    fontWeight: activeSection === item.to ? 700 : 500,
                    fontSize: '1.1rem',
                    padding: '16px 0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    mx: 2,
                                          '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)',
                      },
                  },
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled
              ? theme.palette.mode === 'dark' 
                ? 'rgba(10, 10, 10, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
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
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => handleNavClick(item.to)}
                  >
                    <Button
                      startIcon={item.icon}
                      variant="text"
                      disableRipple
                      sx={{
                        color: scrolled 
                          ? (activeSection === item.to ? theme.palette.primary.main : theme.palette.text.primary)
                          : (activeSection === item.to ? theme.palette.primary.main : 'white'),
                        mx: 1,
                        px: 3,
                        py: 1.5,
                        fontWeight: activeSection === item.to ? 700 : 500,
                        fontSize: '1rem',
                        borderRadius: 3,
                        background: 'none !important',
                        border: activeSection === item.to 
                          ? `1px solid ${theme.palette.primary.main}` 
                          : '1px solid transparent',
                        boxShadow: 'none !important',
                        filter: 'none !important',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          color: scrolled ? theme.palette.primary.main : 'white',
                          background: 'none !important',
                          boxShadow: 'none !important',
                          filter: 'none !important',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
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
                  background: scrolled ? theme.palette.background.paper : 'rgba(255,255,255,0.1)',
                  border: `1px solid ${scrolled ? theme.palette.divider : 'rgba(255,255,255,0.2)'}`,
                  '&:hover': {
                    transform: 'scale(1.05)',
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