import { Box, Typography, Button, Grid2 } from '@mui/material';
import burger1 from '../assets/images/pexels-photo-12325288.jpeg';
export default function Order(){
    return (
        <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
 
  <Box
    component="img"
    src={burger1} 
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.7)',
    }}
  />
  
  {/* Content Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      width: '100%',
      p: 2,
    }}
  >
    <Grid2 container justifyContent="center">
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: { xs: '4rem', md: '4rem' },
            letterSpacing: '3px',
            mb: 2,
          }}
        >
          CRAFTED WITH PASSION
        </Typography>
        
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Oswald', sans-serif",
            mb: 4,
            textTransform: 'uppercase',
            fontWeight: 400,
          }}
        >
          Experience the Juiciest Burgers in Town
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'hsl(5, 85%, 63%)',
            '&:hover': { bgcolor: 'hsl(5, 85%, 53%)' },
            fontSize: '1.2rem',
            px: 4,
            py: 2,
            borderRadius: '50px',
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          Order Now
        </Button>
      </Grid2>
    </Grid2>
  </Box>

  {/* Feature Ribbon */}
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      bgcolor: 'hsla(0, 0%, 100%, 0.9)',
      py: 2,
    }}
  >
    <Grid2 container spacing={4} justifyContent="center">
      <Grid2 size={{ xs: 6, sm: 3 }}>
        <Box textAlign="center">
          <Typography variant="h3" color="hsl(5, 85%, 63%)" fontWeight={900}>
            100%
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Premium Angus Beef
          </Typography>
        </Box>
      </Grid2>
      
      <Grid2 size={{ xs: 6, sm: 3 }}>
        <Box textAlign="center">
          <Typography variant="h3" color="hsl(5, 85%, 63%)" fontWeight={900}>
            24/7
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Delivery Service
          </Typography>
        </Box>
      </Grid2>
      
      <Grid2 size={{ xs: 6, sm: 3 }}>
        <Box textAlign="center">
          <Typography variant="h3" color="hsl(5, 85%, 63%)" fontWeight={900}>
            50+
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Burger Variations
          </Typography>
        </Box>
      </Grid2>
      
      <Grid2 size={{ xs: 6, sm: 3 }}>
        <Box textAlign="center">
          <Typography variant="h3" color="hsl(5, 85%, 63%)" fontWeight={900}>
            15m
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Average Prep Time
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  </Box>
</Box>
    )
}