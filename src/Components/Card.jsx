import { Box, Typography } from '@mui/material';
import { Grid2 } from '@mui/material';
import burger1 from '../assets/images/free-photo-of-close-up-of-a-delicious-cheeseburger-with-melted-cheese.jpeg';
import burger2 from '../assets/images/pexels-photo-14678738.webp';
import burger3 from '../assets/images/pexels-photo-30881410.webp';
import burger4 from '../assets/images/free-photo-of-delicious-double-cheeseburger-with-sesame-bun.jpeg';
import burger5 from '../assets/images/pexels-photo-14710224.jpeg';
import burger6 from '../assets/images/pexels-photo-5948838.jpeg';

export default function Card() {
  return (
    <>
    <Box my={4} sx={{  py: 4 }}>
  <Grid2 container spacing={4}>
    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger1} 
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              01
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Classic Beef Master
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Juicy 100% Angus beef patty with melted cheddar, crispy bacon, 
              and our
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $12.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>

    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger2}
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              02
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Double Cheese Blast
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Two flame-grilled patties with triple cheese, caramelized onions, 
              and  
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $15.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>

    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger3}
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              03
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Spicy Chicken Supreme
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Crispy chicken breast with jalapeños, pepper jack cheese, 
              and our fiery chipotle mayo
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $13.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger4}
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              04
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Spicy Chicken Supreme
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Crispy chicken breast with jalapeños, pepper jack cheese, 
              and our fiery chipotle mayo
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $13.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger5}
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              05
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Spicy Chicken Supreme
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Crispy chicken breast with jalapeños, pepper jack cheese, 
              and our fiery chipotle mayo
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $13.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Box
            component="img"
            src={burger6}
            sx={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease'
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              color="hsl(5, 85%, 63%)"
              sx={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              06
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ 
                '&:hover': { color: 'hsl(5, 85%, 63%)' },
                fontFamily: "'Oswald', sans-serif",
                textTransform: 'uppercase'
              }}
            >
              Spicy Chicken Supreme
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color="hsl(236, 13%, 25%)"
              sx={{ mt: 1 }}
            >
              Crispy chicken breast with jalapeños, pepper jack cheese, 
              and our fiery chipotle mayo
            </Typography>
            <Typography variant="h6" color="hsl(5, 85%, 63%)" sx={{ mt: 1 }}>
              $13.99
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  </Grid2>
</Box>
    </>
  );
}
