import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import * as ROUTES from "../constants/routes";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="#158f00" href={ROUTES.HOME}>
        Green Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {

  const [ username , setUserName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/users/signup' , {username , email , password}).then((result) => {
        console.log(result);
        window.location = ROUTES.SIGN_IN;
    }).catch((err) => {

      alert('The User Is Already Exist');

    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"  sx = {{backgroundColor: '#e9e9e984' , width: 500 , height: 550 , borderRadius: 15}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1ea407' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,
                backgroundColor: '#1ea407',
                "&:hover": {
                  backgroundColor: "limegreen",
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={ROUTES.SIGN_IN} variant="body2" sx = {{color: 'black'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}