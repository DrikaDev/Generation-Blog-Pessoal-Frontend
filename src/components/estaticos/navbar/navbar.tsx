import { AppBar, Toolbar, Box, Typography,  } from "@mui/material";
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{backgroundColor: "#edb008"}}>
        <Toolbar variant="dense" >
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog Pessoal Drika Dev
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Temas
              </Typography>
            </Box>

            <Link to='/login' className='text-decorator-none'>
              <Box mx={1} className="cursor" style={{ color: 'white' }}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
