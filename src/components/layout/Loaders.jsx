import { Grid,Skeleton } from '@mui/material'
import React from 'react'

export const LayoutLoader=()=>{
    return <div>    
        <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
              <Grid item size={4} sm={4} md={3} sx={{display:{xs:"none" ,sm:"block"}}} bgcolor={"green"} height={"96vh"}>
                <Skeleton variant='rectangular' />
              </Grid>
              <Grid item size={4} xs={12} md={5} lg={6}  height={"96vh"}>   <Skeleton variant='rectangular' /></Grid>

              <Grid item
              size={4}
               md={4} 
               lg={3}
                sx={{
                display:{xs:"none",md:"block"}}} 
                 height={"96vh"}
                 
                 >
                   <Skeleton variant='rectangular' height={"100vh"} />
                    </Grid>
            </Grid></div>
}
