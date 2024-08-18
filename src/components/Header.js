import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';  // Import the Close icon

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Ghar Pe Tuition
          </Typography> */}
          <Typography 
  variant="h4" 
  component="div" 
  sx={{ 
    flexGrow: 1.4, 
    // ml: 4, // Adds some margin to the left, pushing it to the right
    // fontWeight: 'bold', // Makes the text bold
    // fontFamily: 'Arial, sans-serif', // Sets the font family
    // letterSpacing: '0.05em', // Adds some spacing between the letters
    // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow to the text
    // color: '#f5f5f5', // Changes the text color to light gray/white
  }}
  // style={{
  //   marginLeft:230,
  // }}
>
  Ghar Pe Tuition
</Typography>
          <Button variant="contained" color="secondary" sx={{ mr: 1 }}  onClick={() => scrollToSection('contact')}>
            Apply as Student 
          </Button>
          <Button variant="contained" color="secondary" onClick={() => scrollToSection('contact')}>
            Apply as Tutor
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1976d2', // Blue color
            color: '#ffffff', // White text color
            width: '240px',
          },
        }}
      >
        <Box sx={{ width: 240 }}>
          {/* Close Button at the Top */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('home')}>
                Home
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('about')}>
                About Us
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth  onClick={() => scrollToSection('projects')}>
                Service
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('contact')}>
                Apply as Tutor
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('contact')}>
                Apply as Student
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('contact')}>
                Contact Us
              </Button>
            </ListItem>
            <ListItem button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
               onClick={() => window.open('https://chat.whatsapp.com/JCrMJaU4XEWDKf8KmEaBBK', '_blank')}
              >
          Join on WhatsApp
            </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
