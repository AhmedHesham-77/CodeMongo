import { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header'
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function ShowProducts() {

  // const theme = createTheme();

    const [ products , setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((products) => {
            setProducts(products.data);
        }).catch((err) => {
            console.log(err);
        })
    } , []);

    return (

      <div>
          <Header/>
          {
            products.map((product) => (
              <div>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>






              </div>
            ))
          }
       </div>
    );
}

export default ShowProducts;