import React from "react";
import Button from '@mui/material/Button';
import { Counter } from "../Components/Counter";


interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return <>
          <h1> Welcome from TSX</h1>
          <hr />
          <Counter/>
      </>;
};
export default Welcome;
