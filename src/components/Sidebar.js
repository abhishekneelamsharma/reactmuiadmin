import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { tokens } from '../theme';
import { Box, IconButton, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Person3Icon from '@mui/icons-material/Person3';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PublicIcon from '@mui/icons-material/Public';
import { Link, useLocation } from 'react-router-dom';

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);
  return (
    <>
      <Sidebar backgroundColor="" collapsed={isCollapsed}>
        <Box paddingY={2} >
          {
            !isCollapsed && (
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={1}>
                <Box>
                  <Typography variant="h3">
                    ADMINPANEL
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )
          }
          {
            !isCollapsed && (
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} marginY={2}>
                <Box>
                  <Avatar sx={{ width: "60px", height: "60px" }}>
                    <Person3Icon sx={{ width: "35px", height: "35px" }} />
                  </Avatar>
                </Box>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                  <Typography variant="body1" >Charls babbage</Typography>
                  <Typography color='gray'>fatherofcomputer@gmail.com</Typography>
                </Box>
              </Box>
            )
          }
          {
            isCollapsed && (
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} marginLeft={1} marginY={2}>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )
          }

          <Menu menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? '#6870fa' : undefined,
                borderRadius: "20px 0px 0px 20px",
                "&:hover": {
                  backgroundColor: '#6870fa'
                }
              };
            },
          }}>
            <MenuItem icon={<SpaceDashboardIcon />} component={<Link to="/dashboard" />} active={pathname === "/dashboard"}> Dashboard</MenuItem >
            <Typography variant="h6" color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Items
            </Typography>
            <MenuItem icon={<TableChartIcon />} component={<Link to="/table" />} active={pathname === "/table"}>Table</MenuItem>
            <MenuItem icon={<CalendarMonthIcon />} component={<Link to="/calender" />} active={pathname === "/calender"}> Calender </MenuItem>
            <MenuItem icon={<FormatAlignCenterIcon />} component={<Link to="/form" />} active={pathname === "/form"}>From</MenuItem>

            <Typography variant="h6" color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <MenuItem icon={<BarChartIcon />} component={<Link to="/bar-chart" />} active={pathname === "/bar-chart"}>Bar Chart </MenuItem>
            <MenuItem icon={<PieChartIcon />} component={<Link to="/pie-chart" />} active={pathname === "/pie-chart"}>Pie Chart </MenuItem>
            <MenuItem icon={<TimelineIcon />} component={<Link to="/line-chart" />} active={pathname === "/line-chart"}>Line Chart </MenuItem>
            <MenuItem icon={<PublicIcon />} component={<Link to="/geo-chart" />} active={pathname === "/geo-chart"}>Geographic Chart </MenuItem>

            <Typography variant="h6" color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Drop
            </Typography>
            <SubMenu label="Charts" icon={<DiamondIcon />} rootStyles={{
              ['.' + menuClasses.subMenuContent]: {
                backgroundColor: colors.primary[500],
              },
            }}>
              <MenuItem > Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
          </Menu>
        </Box>
      </Sidebar>
    </>
  )
}

export default MySidebar