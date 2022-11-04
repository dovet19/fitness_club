import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner2.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px">
      <Typography color="#1b1b1b" fontWeight="600" fontSize="26px">
        React Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#424242", padding: "10px" }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#003c8f"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
