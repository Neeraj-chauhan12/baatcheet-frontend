import React from 'react'
import { Link } from '../components/Stylecomponents'
import { Stack, Typography } from '@mui/material'


const ChatItems = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen

}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}>
        <div style={{
            display:"flex",
            gap:"1rem",
            position:"relative",
            alignItems:"center",
            padding:"1rem",
            color:sameSender?"white":"unset",
            backgroundColor:sameSender?"black":"upset"
        }}>

        
            <Stack>
                <Typography>{name}</Typography>
                {
                    newMessageAlert &&(
                <Typography >{newMessageAlert.count}new Message</Typography>
                    )
                }
            </Stack>

        </div>

    </Link>
 
  )
}

export default ChatItems
