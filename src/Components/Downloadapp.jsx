import { Box, Typography, Button, Avatar, Grid2 } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import DownloadIcon from "@mui/icons-material/Download";
import img from "../assets/images/buffalo-app-CTA-img.png";
export default function DownloadApp() {
  return (
    <Box sx={{ py: 8 }}>
      <Grid2 container spacing={6} alignItems="center">
        {/* Left Side - Content */}
        <Grid2 size={{ xs: 12, md: 7 }}>
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
                color: "hsl(5, 85%, 63%)",
                fontSize: { xs: "3.5rem", md: "4.5rem" },
                letterSpacing: "2px",
                mb: 2,
              }}
            >
              GET OUR APP
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
              Order Faster, Earn Rewards
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={12}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircleIcon sx={{ color: "hsl(5, 85%, 63%)" }} />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Exclusive App-only Offers
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={12}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircleIcon sx={{ color: "hsl(5, 85%, 63%)" }} />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Instant Order Tracking
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={12}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircleIcon sx={{ color: "hsl(5, 85%, 63%)" }} />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Priority Delivery Access
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>

            {/* Download Buttons */}
            <Grid2 container spacing={2}>
              <Grid2 size={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AppleIcon />}
                  sx={{
                    bgcolor: "hsl(236, 13%, 25%)",
                    "&:hover": { bgcolor: "hsl(236, 13%, 15%)" },
                    py: 2,
                    borderRadius: "12px",
                    fontFamily: "'Oswald', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  App Store
                </Button>
              </Grid2>
              <Grid2 size={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AndroidIcon />}
                  sx={{
                    bgcolor: "hsl(5, 85%, 63%)",
                    "&:hover": { bgcolor: "hsl(5, 85%, 53%)" },
                    py: 2,
                    borderRadius: "12px",
                    fontFamily: "'Oswald', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Play Store
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>

        {/* Right Side - Phone Mockup */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: "relative",
              maxWidth: 400,

              mx: "auto",
              perspective: "1000px",
            }}
          >
            <Box
              component="img"
              src={img}
              sx={{
                width: "70%",

                transform: "rotateY(-18deg) rotatex(20deg)",
                transition: "transform 0.3s ease",
              }}
            />
            {/* <Box
                component="img"
                src={img} 
                sx={{
                  position: 'absolute',
                  top: '5%',
                  left: '8%',
                  width: '84%',
                  height: '90%',
                  borderRadius: '25px',
                  objectFit: 'cover',
                  boxShadow: 3
                }}
              /> */}
            {/* Animated Download Badge */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-20px",
                right: "20px",
                bgcolor: "hsl(5, 85%, 63%)",
                color: "white",
                px: 3,
                py: 1,
                borderRadius: "50px",
                fontFamily: "'Oswald', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 1,
                boxShadow: 3,
                animation: "bounce 2s infinite",
              }}
            >
              <DownloadIcon />
              <Typography variant="body2">5000+ Downloads</Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
