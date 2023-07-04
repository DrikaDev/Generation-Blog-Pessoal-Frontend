import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");

  function handleChange(e: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value} >

        <AppBar position="static" >
          <Tabs
            centered
            indicatorColor="secondary"
            onChange={handleChange}
            style={{ backgroundColor: "#eab715" }}
          >
            <Tab label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>

        <TabPanel value="2" >
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Aqui é um espaço criado para mamães que estão na tecnologia e que
            gostariam de compartilhar ideias, experiências, dicas ou
            simplesmente apenas desabafar pois ninguém é de ferro.
          </Typography>
        </TabPanel>

      </TabContext>
    </>
  );
}

export default TabPostagem;
