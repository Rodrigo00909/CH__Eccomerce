import React, {useState, useEffect} from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ItemCount = ({max = 10, min = 0, initial = 0, getQuantity }) => {

    // useStates
    const [counter, setCounter] = useState(initial); //NULL
    const [maximo, setMaximo] = useState(max);
    const [minimo, setMinimo] = useState(min);
    const [alertMin, setAlertMin ] = useState(false);
    const [alertMax, setAlertMax ] = useState(false);

    // Funciones
    const removeItem = () => {
      if(counter > min){
				const count = counter - 1;
				setCounter(count);
				{getQuantity(count)};
			} else{
				setAlertMin(true);
				setTimeout(function(){ setAlertMin(false); }, 2000);
			}
    }

    const addItem = () => {
			if(counter < max){
				setCounter(counter+1);
				{getQuantity(counter+1)}
			} else {
				setAlertMax(true);
				setTimeout(function(){ setAlertMax(false); }, 2000);
			}
		}

    // // use Effect
    // useEffect(() => {
    //   setCounter(initial);
    //   setMaximo(max);
    //   setMinimo(min);
    // }, [initial, max, min]);

    const style = {
      alert: {
        color: 'red',
      }
    }

  return (
    <>
        <h1>Contador con boton</h1> 

        <Stack direction="row" spacing={8}>
          <Button variant="contained" onClick={addItem} >+</Button>

          <IconButton aria-label="cart">
            <Badge badgeContent={counter} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Button variant="contained" onClick={removeItem}>-</Button>

        </Stack>
        {alertMax && <small style={style.alert}>El stock maximo es {maximo}</small>}
    </>
  )
}

export default ItemCount