import Button from '@mui/material/Button';
import './Dashboadrd.css'

function Dashboard() {

    return (


        <>
            <div className="word"> Admin Panel </div>
            <div className="buttons">
                <Button variant="contained">Add Product</Button>
                <Button variant="contained">Update Product</Button>
                <Button variant="contained">Delete Product</Button>
            </div>
        </>


    );

}

export default Dashboard;