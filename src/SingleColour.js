import React, { useEffect, useState } from "react";
import "./index.css";

const SingleColour = ({ color, index, hexColor, rgb, weight }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeOut = setInterval(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to cipboard</p>}
    </article>
  );
};

export default SingleColour;
