import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import * as ROUTES from "../constants/routes";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="#158f00" href={ROUTES.HOME}>
        Green Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function DeleteProduct() {
  const [productId, setProductId] = useState();
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:5000/product/delete", { data: { productId } })
      .then((result) => {
        setSuccessAlertOpen(true);
        setTimeout(() => {
          setSuccessAlertOpen(false);
          window.location = ROUTES.HOME;
        }, 3000); // Close the success alert after 3 seconds and redirect to home
      })
      .catch((err) => {
        setErrorAlertOpen(true);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "#e9e9e984",
          width: 600,
          height: 350,
          borderRadius: 15,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1ea407" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Delete Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="productId"
                  label="productId"
                  name="productId"
                  autoComplete="productId"
                  onChange={(event) => {
                    setProductId(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#1ea407",
                "&:hover": {
                  backgroundColor: "limegreen",
                },
              }}
            >
              Delete
            </Button>
          </Box>
          {successAlertOpen && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">Book deleted successfully!</Alert>
            </Stack>
          )}
          {errorAlertOpen && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">Error deleting the product.</Alert>
            </Stack>
          )}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
