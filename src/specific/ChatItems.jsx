import React from 'react'
import { Link } from '../components/Stylecomponents'
import { Box, Stack, Typography } from '@mui/material'
import { Height } from '@mui/icons-material'
import AvatarCard from './AvatarCard'


const ChatItems = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat

}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
        <div style={{
            display:"flex",
            gap:"1rem",
            position:"relative",
            alignItems:"center",
            padding:"1rem",
            color:sameSender?"white":"unset",
            backgroundColor:sameSender?"black":"upset"
        }}>

        {/* avatar card */}

        <AvatarCard avatar={avatar} />
        
            <Stack>
                <Typography>{name}</Typography>
                {
                    newMessageAlert &&(
                <Typography >{newMessageAlert.count} New Message</Typography>
                    )
                }
            </Stack>


            {
                isOnline && (
                    <Box
                    sx={{
                        width:"10px",
                        height:"10px",
                        borderRadius:"50%",
                        backgroundColor:"green",
                        position:"absolute",
                        top:"50%",
                        right:"1rem",
                        transform:"translate(-50%)"
                    }}
                     />
                )
            }

        </div>

    </Link>
 
  )
}

export default ChatItems
