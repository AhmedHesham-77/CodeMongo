import Button from '@mui/material/Button';
import * as ROUTES from "../constants/routes";
import './Dashboadrd.css'

function Dashboard() {


    const HandleCreateProduct = (event) => {
        event.preventDefault();
        window.location = ROUTES.CREATE_PRODUCT;
    }

    const HandleUpdateProduct = (event) => {
        event.preventDefault();
        window.location = ROUTES.UPDATE_PRODUCT;
    }

    const HandleDeleteProduct = (event) => {
        event.preventDefault();
        window.location = ROUTES.DELETE_PRODUCT;
    }

    return (


        <>
            <div className="word"> Admin Panel </div>
            <div className="buttons">
                <Button variant="contained" onClick={HandleCreateProduct}>Add Product</Button>
                <Button variant="contained" onClick={HandleUpdateProduct}>Update Product</Button>
                <Button variant="contained" onClick={HandleDeleteProduct}>Delete Product</Button>
            </div>
        </>







    );

}

export default Dashboard;