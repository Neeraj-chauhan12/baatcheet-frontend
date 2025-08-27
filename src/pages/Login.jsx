import React from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { useState } from 'react'
import { VisuallyHiddenInput } from '../components/Stylecomponents'
import {useFileHandler, useInputValidation} from '6pp'
import { userNameValidator } from '../utils/validators'

const Login = () => {

    const [isLogged,setIsLogged]=useState(true)

    const toggelLogin=()=>setIsLogged((prev)=>!prev)

    const name=useInputValidation("")
    const bio=useInputValidation("")
    const username=useInputValidation("",userNameValidator)
    const password=useInputValidation("")

    const avatar=useFileHandler("single")

    const handleLogin=(e)=>{
        e.preventDefault()
    }

    const handleSignup=(e)=>{
        e.preventDefault()
    }

  return <Container component={"main"} maxWidth="xs" 
  sx={{
    height:"100vh",
    display:'flex',
    justifyContent:"center",
    alignItems:"center"

  }}>

    <Paper elevation={3} 
    sx={{
        padding:4,
        display:'flex',
        flexDirection:"column",
        alignItems:"center"
    }}>

        {
            isLogged?(
                // this is login page
            <>
            <Typography variant='h5'>login</Typography>
            <form 


                onSubmit={handleLogin}

            style={{
                width:"100%",
                marginTop:"1rem"
            }}
            >
                <TextField
                required
                fullWidth
                label="Username"
                margin='normal'
                variant='outlined' 
                value={username.value}
                onChange={username.changeHandler}
                 />

              <TextField
                required
                fullWidth
                label="Password"
                margin='normal'
                variant='outlined' 
                value={password.value}
                onChange={password.changeHandler}
                 />

                 <Button sx={{marginTop:"1rem"}} fullWidth variant="contained" color='primary' type='submit'>Login</Button>

                 <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                 <Button 
                 sx={{marginTop:"1rem"}}
                 variant='text'
                 fullWidth
                 onClick={toggelLogin}
                >Sign Up Instead</Button>

            </form>
            </>)
            :

            // this is the signup page

            (
            <>
            
            <Typography variant='h5'>Sign up</Typography>
            <form 
               
                 onSubmit={handleSignup}

            style={{
                width:"100%",
                marginTop:"1rem"
            }}
            >

             <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{
                    width:"10rem",
                    height:"10rem",
                    objectFit:"contain"
                }}
                src={avatar.preview} 
                />

                
                

                <IconButton
                sx={{
                    position:"absolute",
                    bottom:"0",
                    right:"0",
                    color:"white",
                    bgcolor:"rgba(0,0,0,0.5)",":hover":{
                        bgcolor:"rgba(0,,0,0.7)"
                    },

                }}
                component="label"
                >
                    <>
                   <CameraAltIcon />
                   <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                    </>
                </IconButton>

             </Stack>

             
                 {
                    avatar.error && (
                         <Typography m={"1rem auto"} width={"fit-content"} display={"block"}  color='error' variant='caption'>
                            {
                                avatar.error
                            }

                         </Typography>
                    )
                 }
                 

                <TextField
                required
                fullWidth
                label="Username"
                margin='normal'
                variant='outlined' 
                value={username.value}
                onChange={username.changeHandler}
                 />

                 {
                    username.error && (
                         <Typography color='errro' variant='caption'>
                            {
                                username.error
                            }

                         </Typography>
                    )
                 }

                  <TextField
                required
                fullWidth
                label="Bio"
                margin='normal'
                variant='outlined' 
                value={bio.value}
                onChange={bio.changeHandler}
                 />

              <TextField
                required
                fullWidth
                label="Password"
                margin='normal'
                variant='outlined' 
                value={password.value}
                onChange={password.changeHandler}

                 />

                 <Button sx={{marginTop:"1rem"}} fullWidth variant="contained" color='primary' type='submit'>Login</Button>

                 <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                 <Button 
                 sx={{marginTop:"1rem"}}
                 variant='text'
                 fullWidth
                 onClick={toggelLogin}
                >Login Instead</Button>

            </form>
            
            </>
            )
        }


    </Paper>


  </Container>
}

export default Login
