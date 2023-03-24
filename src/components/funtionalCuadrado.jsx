import React, { useState } from "react";

const FuntionalCuadrado = () => {
  const [color, setColor] = useState("black");
  const [cambioColor, setCambioColor] = useState(true);

  const getColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const mouseChange = () => {
    if (cambioColor) {
      const newColor = getColor(color);
      setColor(newColor);
    }
  };

  const mouseLeave = () => {
    setColor("black");
  };

  const changeClick = () => {
    setCambioColor(!cambioColor);
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          backgroundColor: "cyan",
          color: "gray",
        }}
      >
        Este es mi cuadrado
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
          style={{ width: "255px", height: "255px", backgroundColor: color }}
          onMouseEnter={mouseChange}
          onMouseLeave={mouseLeave}
          onClick={changeClick}
          onDoubleClick={() => {
            setCambioColor(false);
          }}
        />
      </div>
    </div>
  );
};

export default FuntionalCuadrado;
