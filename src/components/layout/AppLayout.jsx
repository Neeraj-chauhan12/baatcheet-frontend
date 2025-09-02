import React from 'react'
import Header from './Header'
import {Grid} from '@mui/material';
import ChatList from '../../specific/ChatList';
import { samplechats } from '../constants/sampledata';
import { useParams } from 'react-router-dom';

const AppLayout =()=> (WrappedConponent) => {
  return (props)=>{

  const params=useParams();
  const chatId=params.chatId;
    return(
        <div>
            <Header />
            <Grid container height={"calc(100vh-4rem)"}>
              <Grid item size={4} sm={4} md={3} sx={{display:{xs:"none" ,sm:"block"}}}  height={"96vh"}>
                <ChatList 
                chats={samplechats} 
                chatId={chatId}
                newMessagesAlert={[
                {
                  chatId,
                  count:5
                }
                ]}

                onlineUsers={["1","2"]}
                />
                </Grid>
              <Grid item size={4} xs={12} md={5} lg={6}  height={"96vh"}>
                <WrappedConponent {...props} />
                </Grid>
              <Grid item
              size={4}
               md={4} 
               lg={3}
                sx={{
                display:{xs:"none",md:"block"}}} 
                 height={"96vh"}
                 padding={"2rem"}
                 bgcolor="rgba(0,0,0,0.85)"
                >third</Grid>
            </Grid>
            
            
            
        </div>
    )
  }
}

export default AppLayout
