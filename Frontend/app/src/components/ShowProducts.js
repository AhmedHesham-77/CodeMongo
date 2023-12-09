import { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ShowProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((response) => {
            setProducts(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '5px' , backgroundColor: '#d4e3d58f' }}>
                {
                    products.map((product, index) => (
                        <Card key={index} sx={{ width: '250px', height: '335px' , margin: '5px' , borderRadius: 10 , backgroundColor: 'white' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt="product"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx = {{color: 'black' , textAlign: 'center'}}>
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" sx = {{color: 'black' , textAlign: 'center' , marginTop: 2}}>
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" sx = {{color: '#1e991e' , marginLeft: 10}} onClick={
                                    (event) => {
                                        event.preventDefault();
                                        window.location = `/product/${product._id}`;
                                      }
                                    }
                                    >
                                    EXPLORE
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default ShowProducts;
