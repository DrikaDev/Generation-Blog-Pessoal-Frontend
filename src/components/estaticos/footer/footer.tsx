import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, Box, Typography } from "@material-ui/core";
import "./footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5" align="center" gutterBottom className="textosFooter" >
                Siga-me nas redes sociais!
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="import FacebookIcon from '@mui/icons-material/Facebook';" target="_blank">
                <FacebookIcon className="redes" />
              </a>
              <a href="import InstagramIcon from '@mui/icons-material/Instagram';" target="_blank">
                <InstagramIcon className="redes" />
              </a>
              <a href="import LinkedInIcon from '@mui/icons-material/LinkedIn';" target="_blank">
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>

          <Box className="box2" >
            <Box paddingTop="{1}">
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textosFooter"
              >
                Desenvolvido com ❤️ por DrikaDev em Junho/2023 no curso da
                Generation
              </Typography>
            </Box>


          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
