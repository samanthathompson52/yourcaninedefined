import React from "react";
import { AppName } from "./AppName";
import {
  Toolbar,
  AppBar
} from "@mui/material";

export function GuestToolbar() {
  return (
      <AppBar position="sticky">
        <Toolbar sx={{ bgcolor: 'white'}}>
          <AppName />
        </Toolbar>
      </AppBar>
  );
}
