import { Box, Button, Divider, Grid2, Typography } from '@mui/material';
import DHero from '../assets/images/pexels-jonathanborba-19247580.jpg';
import MHero from '../assets/images/pexels-pedrofurtadoo-30500750.jpg';

export default function HERO() {
  return (
    <>
      <Box my={3}>
        <Grid2 container spacing={2}>
  
          <Grid2 size={{ xs: 12, sm: 8 }}>
            <Grid2 container spacing={2}>
           
              <Grid2 size={12}>
                <Box
                  component="img"
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    content: {
                      xs: `url(${MHero})`,
                      sm: `url(${DHero})`,
                    },
                  }}
                />
              </Grid2>

            
              <Grid2 size={{ xs: 12, sm: 6 }}>
  <Typography my={2} variant="h3" fontWeight={800} color="primary.main">
    Savor the Flavor of Our Handcrafted Burgers!
  </Typography>
</Grid2>

<Grid2 size={{ xs: 12, sm: 6 }}>
  <Typography
    my={2}
    variant="body2"
    fontSize={16}
    color="text.secondary"
    lineHeight={1.7}
  >
    We take pride in using locally-sourced, premium ingredients to create mouthwatering burgers that explode with flavor. From our signature spice blends to our slow-cooked meats, every bite is a celebration of culinary craftsmanship.
  </Typography>
  <Button
    variant="contained"
    sx={{
      mt: 3,
      px: 4,
      py: 2,
      textTransform: 'uppercase',
      backgroundColor: 'secondary.main',
      color: 'common.white',
      borderRadius: 1,
      fontWeight: 700,
      letterSpacing: 1,
      '&:hover': {
        backgroundColor: 'primary.dark',
        transform: 'translateY(-2px)',
        boxShadow: 2,
      },
      transition: 'all 0.3s ease-in-out'
    }}
  >
    Explore Our Menu
  </Button>
</Grid2>
            </Grid2>
          </Grid2>

     
          <Grid2 size={{ xs: 12, sm: 4 }}>
  <Box sx={{ bgcolor: 'hsl(30, 6.30%, 6.30%)', p: 2, borderRadius:1}}>
    <Typography
      my={.5}
      variant="h5"
      fontWeight={700}
      color="hsl(10, 80%, 50%)" 
    >
      Specials
    </Typography>
    
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Classic Beef Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)" 
    >
      Juicy Angus patty with melted cheddar, crispy bacon, and house sauce
    </Typography>
    <Divider sx={{ borderColor: 'hsl(10, 80%, 50%)', margin: '1rem 0', opacity: 0.4 }} />

    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Spicy Chicken Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)"
    >
      Crispy chicken breast with jalapeños, pepper jack cheese, and chipotle mayo
    </Typography>
    <Divider sx={{ borderColor: 'hsl(10, 80%, 50%)', margin: '1rem 0', opacity: 0.4 }} />

    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Veggie Delight Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)"
    >
      House-made black bean patty with avocado, sprouts, and garlic aioli
    </Typography>
    <Divider sx={{ borderColor: 'hsl(10, 80%, 50%)', margin: '1rem 0', opacity: 0.4 }} />
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Veggie Delight Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)"
    >
      House-made black bean patty with avocado, sprouts, and garlic aioli
    </Typography>
    <Divider sx={{ borderColor: 'hsl(10, 80%, 50%)', margin: '1rem 0', opacity: 0.4 }} />
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Veggie Delight Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)"
    >
      House-made black bean patty with avocado, sprouts, and garlic aioli
    </Typography>
    <Divider sx={{ borderColor: 'hsl(10, 80%, 50%)', margin: '1rem 0', opacity: 0.4 }} />
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={700}
      sx={{ '&:hover': { color: 'hsl(10, 80%, 50%)' } }}
      color="white"
    >
      Veggie Delight Burger
    </Typography>
    <Typography
      my={2}
      variant="body2"
      fontSize={15}
      fontWeight={400}
      color="hsl(35, 50%, 75%)"
    >
      House-made black bean patty with avocado, sprouts, and garlic aioli
    </Typography>
   
    
  </Box>
</Grid2>
        </Grid2>
      </Box>
    </>
  );
}
