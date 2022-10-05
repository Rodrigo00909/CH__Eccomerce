import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <>
      <IconButton aria-label="cart" color='white' >
          <Badge>
              <ShoppingCartIcon />
          </Badge>
      </IconButton>
    </>
  )
}

export default CartWidget