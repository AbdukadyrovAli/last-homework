import React from "react";
import "./Header.css";
import {Button} from "../../UI/button/Button";

export const Header = ({onClick}) => {
  return (
    <div className="headerDiv">
        
      <h2>Favorite Movie</h2>
      <Button onClick={onClick} width="160px" backgroundColor="orange" marginRight='50px' marginBottom='10px'>
        Add Movie
      </Button>
    </div>
  );
};


