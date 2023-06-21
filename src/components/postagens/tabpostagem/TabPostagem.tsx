import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");

  function handleChange(e: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" 
          onChange={handleChange} 
          style={{ backgroundColor: "#eab715" }}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>

        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            odio, culpa dolorem aliquid sapiente recusandae, repellendus
            repellat nostrum est odit reprehenderit sequi. At molestiae
            reprehenderit laboriosam laudantium, asperiores magnam error!
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagem;
