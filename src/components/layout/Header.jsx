import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense,lazy, useState } from 'react'
import {Add as AddIcon,Logout as LogoutIcon, Menu as MenuIcon,Group as GroupIcon, Search as SearchIcon, Notifications as NotificationsIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const Search =lazy(()=>import('../../specific/Search.jsx'))
const Notifications =lazy(()=>import('../../specific/Notifications.jsx'))
const NewGroup =lazy(()=>import('../../dailog/NewGroup.jsx'))

const Header = () => {

    const navigate=useNavigate()

    const [isSearch,SetIsSearch]=useState(false)
    const [isMobile,SetIsMobile]=useState(false)
    const [isNewGroup,SetIsNewGroup]=useState(false)
    const [isNotifications,setIsNotifications]=useState(false)


    const handlemobile=()=>{
      SetIsMobile((prev)=> !prev)
    }

    const openSearch=()=>{
        console.log("open")
        SetIsSearch((prev)=> !prev)
    }

     const NewGroup=()=>{
      
        SetIsNewGroup((prev)=> !prev)
    }

      const handleManageGroup=()=>{
      
        SetIsMobile((prev)=> !prev)
    }

       const handleLogout=()=>{
      
    }

    
       const HandleNotifications=()=>{
      
        setIsNotifications((prev)=> !prev)
    }

  return (
    <>
    <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor:"yellow"}} />
        <Toolbar>
            <Typography
             variant='h6' 
             sx={{display:{xs:"none" , sm:"block"}}}
            >
                Baatcheet
            </Typography>
            <Box
            sx={{ display:{xs:"block" , sm:"none"}}} 
            >
           <IconButton color='inherit' onClick={handlemobile}>
            <MenuIcon />
           </IconButton>
            </Box>
             <Box sx={{flexGrow:1}} />

            <Box>
               <IconButton color='inherit' size='large' onClick={openSearch}>
            <SearchIcon />
           </IconButton>
               

               <Tooltip title="New Group">
                <IconButton color='inherit' size='large' onClick={NewGroup}>
                  <AddIcon />
                </IconButton>
               </Tooltip>


               
               <Tooltip title="Manage Group">
                <IconButton color='inherit' size='large' onClick={handleManageGroup}>
                  <GroupIcon />
                </IconButton>
               </Tooltip>

               <Tooltip title="Notification">
                <IconButton color='inherit' size='large' onClick={HandleNotifications}>
                  <NotificationsIcon />
                </IconButton>
               </Tooltip>

               <Tooltip title="LogOut">
                <IconButton color='inherit' size='large' onClick={handleLogout}>
                  <LogoutIcon />
                </IconButton>
               </Tooltip>
            
            
                </Box>
        </Toolbar>
    </Box>

{
  isSearch && (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  )
}

{
  isNotifications && (
    <Suspense fallback={<div>Loading...</div>}>
      <Notifications />
    </Suspense>
  )
}

{
  isNewGroup && (
    <Suspense fallback={<div>Loading...</div>}>
      <NewGroup />
    </Suspense>
  )
}

</>

  )
}

export default Header
