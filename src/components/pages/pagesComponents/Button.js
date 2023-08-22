import React from "react";
import { Button } from "@mui/material";
import "../../styles/main.css";
export default function AETButtons({
  title = "Add",
  disabled = false,
  className,
  ...rest
}) {
  return (
    <Button
      className={`aetButton ${className && className} ${
        disabled ? "disabledButton" : "activeButton"
      } `}
      {...rest}
    >
      {title}
    </Button>
  );
}