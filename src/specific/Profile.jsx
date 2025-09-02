import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {Face as FaceIcon , AlternateEmail as UserIcon, CalendarMonth as CalendarIcon, AlternateEmail} from '@mui/icons-material'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar sx={{
            width:200,
            height:200,
            objectFit:"contain",
            marginBottom:"1rem",
            border:"5px solid white"
        }} />

        <ProfileCard text={"i_m_neeraj_rajput"} heading={"Username"}  />
       <ProfileCard text={"Neeraj chauhan"} heading={"name"} />
       <ProfileCard text={"Neeraj"} heading={"join"} /> 
       {/* //moment("2024-12-04T18:30:00.000Z").fromNow() */}

    </Stack>
      
      
    
  )
}





export default Profile

const ProfileCard=({text,icon,heading})=>(
    <Stack 
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >

        { icon && icon}

     <Stack>
        <Typography variant='body1'>{text}</Typography>
        <Typography color={"gray"} variant='caption'>{heading}</Typography>
     </Stack>

        
    </Stack>
)
