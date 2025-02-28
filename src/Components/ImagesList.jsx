import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography, Button, Avatar, Grid2 } from '@mui/material';


export default function TitlebarImageList() {
  return (
    <Box my={4} sx={{  py: 4 }}>
  <Grid2 container spacing={4}>
    {/* Burger Gallery */}
    <Grid2 size={{ xs: 12, md: 8 }}>
      <Grid2 container spacing={2}>
        {itemData.map((item) => (
          <Grid2 key={item.img} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6,
                },
                transition: 'all 0.3s ease',
                height: 200
              }}
            >
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  p: 2
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontFamily: "'Oswald', sans-serif",
                    textTransform: 'uppercase'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'hsl(5, 85%, 63%)',
                    fontFamily: "'Oswald', sans-serif"
                  }}
                >
                  {item.author}
                </Typography>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>

    {/* Special Features */}
    <Grid2 size={{ xs: 12, md: 4 }}>
  <Box
    sx={{
      position: 'relative',
      height: '95%',
      p: 4,
      borderRadius: 2,
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 6,
      },
      transition: 'all 0.3s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://images.pexels.com/photos/28309047/pexels-photo-28309047/free-photo-of-meat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.6)',
        zIndex: 1
      }
    }}
  >
    {/* Content Overlay */}
    <Box sx={{ position: 'relative', zIndex: 2 }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          mb: 3,
          mx: 'auto',
          bgcolor: 'hsl(5, 85%, 63%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3
        }}
      >
        <InfoIcon fontSize="large" sx={{ color: 'white' }} />
      </Box>
      
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 900,
          fontFamily: "'Bebas Neue', cursive",
          color: 'white',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        Our Secret Recipe
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          mb: 2,
          fontFamily: "'Oswald', sans-serif",
          fontSize: '1.1rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}
      >
        100% Grass-fed Angus Beef
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          mb: 3,
          fontFamily: "'Oswald', sans-serif",
          fontSize: '1.1rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}
      >
        Aged Cheddar & House-made Spices
      </Typography>
      
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'hsl(5, 85%, 63%)',
          '&:hover': { 
            bgcolor: 'hsl(5, 85%, 53%)',
            transform: 'translateY(-2px)'
          },
          px: 6,
          py: 1.5,
          borderRadius: '50px',
          fontFamily: "'Oswald', sans-serif",
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '1.5px',
          transition: 'all 0.3s ease',
          boxShadow: 3
        }}
      >
        Discover More
      </Button>
    </Box>
  </Box>
</Grid2>
  </Grid2>
</Box>
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
