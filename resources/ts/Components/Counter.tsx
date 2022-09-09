import { Button } from '@mui/material';
import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);
    
    const aumentar = (numero:number = 1):void =>{
        setCounter(counter + numero)
    }


  return (
    <div className='mt-4'>
        <h3> Counter -  use statae</h3>
        <span>valor = {counter}</span>
        <br />
        <Button onClick={ () =>aumentar () }  variant="contained" color="success">+1</Button>
        <Button onClick={ () =>aumentar (2) }  variant="contained" color="success">+2</Button>
        <Button onClick={ ()=>setCounter(0) }  variant="contained" color="error">reset</Button>
    </div>
  )
}
