import React from "react";
import { Box } from "@mui/material";

export const API_TYPE_NAME = "MQL"

export function AppName() {
  return (
    <Box
      component="img"
      sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      alt="The house from the offer."
      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
    />  
  );
}
