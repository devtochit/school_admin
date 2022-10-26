import React from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "next/link";



export default function Item({   title, to, icon, selected, setSelected   }) {

  const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (

  <MenuItem
    active={selected === title}
    style={{
      color: colors.grey[100],
    }}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    <Typography>{title}</Typography>
    <Link to={to} />
  </MenuItem>
  )
}
