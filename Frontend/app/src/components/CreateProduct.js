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

export default function CreateProduct() {

    const [ title , setTitle ] = useState();
    const [ about , setAbout ] = useState();
    const [ img , setImg ] = useState();
    const [ price , setPrice ] = useState();
    const [ userEmail , setUserEmail ] = useState(window.localStorage.getItem('email'));

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/product/create' , { title , about , img , price , userEmail }).then((result) => {
            console.log(result.data);
            alert('Product Created');
            window.location = ROUTES.HOME;
        }).catch((err) => {

            console.log(err);

        })
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"  sx = {{backgroundColor: '#e9e9e984' , width: 600 , height: 575 , borderRadius: 15}}>
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
            Create A Product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="Title"
                    label="Title"
                    name="Title"
                    autoComplete="Title"
                    onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="About"
                    label="About"
                    name="About"
                    autoComplete="About"
                    onChange={(event) => {
                        setAbout(event.target.value);
                      }}
                /></Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Img"
                  label="Img"
                  name="Img"
                  autoComplete="Img"
                  onChange={(event) => {
                    setImg(event.target.value);
                  }}

              /></Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Price"
                  label="Price"
                  name="Price"
                  autoComplete="Price"
                  onChange={(event) => {
                    setPrice(event.target.value);
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
              Create
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}