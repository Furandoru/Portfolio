import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a192f', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          MyPortfolio
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                color: location.pathname === link.path ? '#64ffda' : '#ffffff',
                fontWeight: '500',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
