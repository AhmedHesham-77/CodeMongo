import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Body.css";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const UserProfile = () => {
  const [username , setUserName] = useState("");
  const [email , setEmail] = useState(window.localStorage.getItem("email"));
  const [role , setRole] = useState("");
  const [balance , setBalance ] = useState("");

  useEffect(() => {


    const email = window.localStorage.getItem("email");

    axios.get(`http://localhost:5000/profile?email=${email}`).then((res) => {
      setUserName(res.data.username);
      setRole(res.data.role);
      setBalance(res.data.balance);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="backGround">
      <Header />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ width: 600, height: 600, borderRadius: 15 }}>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <Avatar
                     alt={'Profile Picture'}
                    src={''}
                  sx={{ width: 200, height: 200, margin: "auto" }}
                />
                <Typography variant="h5" sx={{ marginTop: 10 }}>
                  User Name : {username}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 5 }}>
                  Email : {email}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 5 }}>
                  Role : {role}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 5 }}>
                  Balance : {balance}
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default UserProfile;