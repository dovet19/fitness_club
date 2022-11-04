import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#eceff1">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" height="80px" />
        <Typography variant="h6" pb="20px" mt="10px">
          Made by Kevin Lim
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
