import { Box, Typography, Button, Grid2 } from "@mui/material";
import burger1 from "../assets/images/free-photo-of-close-up-photo-of-burget.jpeg";
export default function Offers() {
  return (
    <Box sx={{ py: 4 }}>
      <Grid2 container alignItems="center" spacing={4}>
        {/* Image Side */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={burger1}
            sx={{
              width: "100%",

              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
              transition: "all 0.3s ease",
            }}
          />
        </Grid2>

        {/* Content Side */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              px: { xs: 2, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: { xs: "3.5rem", md: "4.5rem" },
                color: "hsl(5, 85%, 63%)",
                mb: 2,
              }}
            >
              LIMITED TIME OFFER!
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Oswald', sans-serif",
                color: "hsl(236, 13%, 25%)",
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              DOUBLE THE MEAT, <br />
              DOUBLE THE CHEESE
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "hsl(236, 13%, 42%)",
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Sink your teeth into our legendary Double Stack Burger now
              featuring two juicy 1/2 lb patties, quadruple cheese layers, and
              crispy onion rings - all for just $19.99! Available exclusively
              this month.
            </Typography>

            <Grid2
              container
              spacing={3}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Grid2>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "hsl(5, 85%, 63%)",
                    "&:hover": { bgcolor: "hsl(5, 85%, 53%)" },
                    fontSize: "1.2rem",
                    px: 5,
                    py: 2,
                    borderRadius: "50px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  Order Combo
                </Button>
              </Grid2>
              <Grid2>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "hsl(236, 13%, 25%)",
                    color: "hsl(236, 13%, 25%)",
                    "&:hover": {
                      borderColor: "hsl(5, 85%, 63%)",
                      color: "hsl(5, 85%, 63%)",
                    },
                    fontSize: "1.2rem",
                    px: 5,
                    py: 2,
                    borderRadius: "50px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  View Menu
                </Button>
              </Grid2>
            </Grid2>

            {/* Badge */}
            <Box
              sx={{
                mt: 4,
                display: "inline-block",
                bgcolor: "hsl(5, 85%, 63%)",
                color: "white",
                px: 3,
                py: 1,
                borderRadius: "50px",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              <Typography variant="body2">🔥 500+ Orders This Week</Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
