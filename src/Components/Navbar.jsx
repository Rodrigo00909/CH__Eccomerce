import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, grey } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from './CartWidget';

const primary = brown[500];
const secondary = grey[100];


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
    palette: {
        primary: {
            main: '#795548',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#bdbdbd',
            contrastText: '#000000'
        },
        white: {
            main: '#ffffff',
        },
        black: {
            main: '#000',
        }
    },
});

const Navbar = () => {
  return (
    <>
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h4" component="ul" sx={{ flexGrow: 1 }}>
                        Icon
                    </Typography>
                    <Typography variant="h6" component="ul" sx={{ flexGrow: 0 }}>
                        Remeras
                    </Typography>
                    <Typography variant="h6" component="ul" sx={{ flexGrow: 0 }}>
                        Pantalones
                    </Typography>
                    <Typography variant="h6" component="ul" sx={{ flexGrow: 1 }}>
                        Calzados
                    </Typography>

                    <Button color='white'>
                        <AccountCircleIcon />
                    </Button>

                    {/* <IconButton aria-label="cart" color='white' >
                        <Badge>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton> */}
                    
                    <CartWidget />

                    <IconButton
                        size="large"
                        edge="start"
                        color="white"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    </>
  )
}

export default Navbar;