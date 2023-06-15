import React from "react";
import Navbar from "./components/estaticos/navbar/navebar";
import Footer from "./components/estaticos/footer/footer";
import Home from "./pages/home";
import { Grid } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Home />
        </Grid>
      </Grid>
      
      <Footer />
    </>
  );
}

export default App;
