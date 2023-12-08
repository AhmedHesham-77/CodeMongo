import * as React from "react";
import './Body.css'
import * as ROUTES from "../constants/routes";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


function Body() {

    const HandleCreateProduct = (event) => {
        event.preventDefault();
        window.location = ROUTES.SHOW_PRODUCTS;
    }

    return (

        <div className="main">


            <div className="about">
                <h1><span>Green</span> Book</h1>
                <h2>Where Knowledge Blooms Electronically!</h2>
                <p>Step into a verdant world of digital discovery at Green Book Oasis. Our virtual shelves are brimming with a lush collection of e-books, providing a sustainable and eco-friendly way to delve into captivating stories and insightful knowledge. Whether you're seeking a thrilling adventure, diving into historical depths, or exploring realms of wisdom, our oasis offers a rich array of electronic treasures. Join us in nurturing your mind while carin</p>
                <Button
                key={"SHOW"}
                component={Link}
                to={ROUTES.SHOW_PRODUCTS}
                onClick={HandleCreateProduct}
                sx={{
                  my: 2,
                  color: "white",
                  marginLeft: 2,
                  width: 250,
                  height: 50,
                  marginTop: 5,
                  backgroundColor: "#1e8e1a",
                  "&:hover": {
                    backgroundColor: "#12d412",
                  },
                }}
                >
                {"SHOW"}
              </Button>

            </div>
            <img src="https://i.suar.me/QJ5J3/l" alt = "NOT FOUND"></img>




        </div>

    );


}

export default Body;