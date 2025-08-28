import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon, Menu as MenuIcon,Group as GroupIcon, Search as SearchIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate=useNavigate()

    const handlemobile=()=>{
        console.log("mobile")
    }

    const openSearch=()=>{
        console.log("open")
    }

     const add=()=>{
        console.log("add")
    }

      const handleManageGroup=()=>{
        console.log("manage grup[")
    }

  return (
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
                <IconButton color='inherit' size='large' onClick={add}>
                  <AddIcon />
                </IconButton>
               </Tooltip>


               
               <Tooltip title="Manage Group">
                <IconButton color='inherit' size='large' onClick={handleManageGroup}>
                  <GroupIcon />
                </IconButton>
               </Tooltip>
            
            
                </Box>
        </Toolbar>
    </Box>
  )
}

export default Header
