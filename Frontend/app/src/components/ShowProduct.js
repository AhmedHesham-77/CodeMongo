import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import * as ROUTES from "../constants/routes";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function ShowProduct() {

    // Get The ID:
    const { id } = useParams();
    const [ product , setProduct ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/product/' + id).then((response) => {
            setProduct(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    const HandleOnlyProduct = (event) => {
        event.preventDefault();
        window.location = ROUTES.HOME;
    }



    return (

        <Container maxWidth="md" style={{ marginTop: '65px' }}>
            <Paper elevation={3} style={{ padding: '20px' , borderRadius: 25 , height: 500 , backgroundColor: 'white' }}>
                <Typography variant="h3" gutterBottom sx = {{color: 'black' , marginLeft: 2}}>
                {product.title}
                </Typography>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                    <CardMedia component="img" height="350" image={product.img} alt={"NOT FOUND"} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx = {{marginTop: 11.85}}>
                    <CardContent sx = {{backgroundColor: '#e8ece8' , height: 250}}>
                        <Typography variant="h5" color="black">
                        Description:
                        </Typography>
                        <Typography variant="body1" paragraph sx = {{color: 'black' , marginLeft: 0 , marginTop: 1 , fontSize: 15}}>
                        {product.about}
                        </Typography>
                        <Typography className = "btn-and-price" variant="h4" color="black" sx = {{marginTop: 14 , color: '#136713' , backgroundColor: '#e8ece8'}}>
                        ${product.price}
                        </Typography>

                        <Button
                key={"SHOW"}
                component={Link}
                to={ROUTES.HOME}
                onClick={HandleOnlyProduct}
                sx={{
                  my: 2,
                  color: "white",
                  width: 200,
                  height: 50,
                  marginLeft: 20,
                  marginTop: -6.5,
                  backgroundColor: "gray",
                  "&:hover": {
                    backgroundColor: "#12d412",
                  },
                }}
                >
                {"Add to cart"}
              </Button>




                    </CardContent>
                    </Card>
                </Grid>
                </Grid>
            </Paper>
            </Container>
    );


}

export default ShowProduct;