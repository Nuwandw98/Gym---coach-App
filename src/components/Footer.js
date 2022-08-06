/** @format */

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Fitness-logo-2.png";

const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="100px" />
        <Typography variant="h5" pb="40px">
          By N D W
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
