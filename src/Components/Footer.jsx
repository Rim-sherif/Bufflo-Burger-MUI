import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { Grid2 } from '@mui/material';

export default function Footer(){
    return (

        <Container maxWidth="xl" sx={{ 
            bgcolor: 'black',
            color: 'white',
            mt: 8,
            display: 'flex',
            justifyContent: 'center',  
            alignItems: 'center',        
            minHeight: 200            
          }}>
        <Box py={8} px={{ xs: 2, md: 0 }}>
          <Grid2 container spacing={4}>
            {/* Logo Section */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" fontWeight={800} gutterBottom>
                BURGER<span style={{ color: 'secondary.main' }}>HUB</span>
              </Typography>
              <Typography variant="body2" color="White">
                Serving Juicy Perfection Since 2010
              </Typography>
            </Grid2>
      
            {/* Contact Info */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Contact Us</Typography>
              <Typography variant="body2" color="White">
                123 Burger Street<br />
                New York, NY 10001<br />
                Phone: (555) 123-4567<br />
                Email: hello@burgerhub.com
              </Typography>
            </Grid2>
      
            {/* Quick Links */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                <ListItem component="li" sx={{ p: 0 }}>
                  <Link href="#" color="White" underline="hover">Our Menu</Link>
                </ListItem>
                <ListItem component="li" sx={{ p: 0 }}>
                  <Link href="#" color="White" underline="hover">About Us</Link>
                </ListItem>
                <ListItem component="li" sx={{ p: 0 }}>
                  <Link href="#" color="White" underline="hover">Gallery</Link>
                </ListItem>
                <ListItem component="li" sx={{ p: 0 }}>
                  <Link href="#" color="White" underline="hover">Careers</Link>
                </ListItem>
              </Box>
            </Grid2>
      
            {/* Hours */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Opening Hours</Typography>
              <Typography variant="body2" color="White">
                Mon: Closed<br />
                Tue-Fri: 11AM - 10PM<br />
                Sat-Sun: 11AM - 12AM
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <IconButton aria-label="Facebook" color="secondary">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="Instagram" color="secondary">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="Twitter" color="secondary">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="Uber Eats" color="secondary">
                  <DeliveryDiningIcon />
                </IconButton>
              </Box>
            </Grid2>
          </Grid2>
      
          {/* Copyright */}
          <Box mt={6} pt={4} borderTop={1} borderColor="divider">
            <Typography variant="body2" color="White" textAlign="center">
              © {new Date().getFullYear()} BurgerHub. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    )
}