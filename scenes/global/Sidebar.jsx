import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Item from './Item';
import Link from 'next/link'

export default function Sidebar() {




  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },

      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center"   >
                <img
                  alt="profile-user"
                  width="100px"
                  height="90px"
                  src={`../../public/assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                <MenuItem
              icon={<HomeOutlinedIcon />}
              onClick={() => setSelected()}
              active={selected}
              style={{
                color: colors.grey[100], }}>
                    <Typography> Dashboard </Typography>
               <Link href='/' >  </Link>
               </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >m
                pages
            </Typography>

            <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => setSelected()}
            active={selected}
           style={{
           color: colors.grey[100], }}>
        <Typography> School </Typography>
            <Link href='/school' >  </Link>
       </MenuItem>



       <MenuItem
            icon={<ContactsOutlinedIcon  />}
            onClick={() => setSelected()}
            active={selected}
           style={{
           color: colors.grey[100], }}>
        <Typography> Teacher </Typography>
            <Link href='/teacher' >  </Link>
       </MenuItem>

       <MenuItem
     icon={<CalendarTodayOutlinedIcon />}
     onClick={() => setSelected()}
     active={selected}
    style={{
    color: colors.grey[100], }}>
      <Typography> Event</Typography>
          <Link href='/event' >  </Link>
      </MenuItem>

            <MenuItem
      icon={<CalendarTodayOutlinedIcon />}
      onClick={() => setSelected()}
      active={selected}
      style={{
      color: colors.grey[100], }}>
      <Typography> Finance</Typography>
          <Link href='/finance' >  </Link>
      </MenuItem>


                <MenuItem
                icon={<PersonOutlinedIcon />}
                onClick={() => setSelected()}
                active={selected}
                style={{
                color: colors.grey[100], }}>
                <Typography> User</Typography>
                    <Link href='/user' >  </Link>
                </MenuItem>




            <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            onClick={() => setSelected()}
            active={selected}
            style={{
            color: colors.grey[100], }}>
            <Typography>Latest Activity</Typography>
                <Link href='/activity' >  </Link>
            </MenuItem>




          </Box>
        </Menu>
      </ProSidebar>
    </Box>

  )
}

