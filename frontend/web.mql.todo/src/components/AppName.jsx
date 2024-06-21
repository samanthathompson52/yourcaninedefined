import React from "react";
import { Box } from "@mui/material";

export const API_TYPE_NAME = "MQL"

export function AppName() {
  return (
    <Box
      component="img"
      sx={{
        margin: 2,
        position: "absolute",
      }}
      src="/logo.webp"
    />  
  );
}
