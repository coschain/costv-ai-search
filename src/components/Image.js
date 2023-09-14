import React from "react";

const Image = ({ url, title, link }) => (
  <li>
    <p>{title}</p>
    <br></br>
    <a href={link}>
    <img src={url} alt={title} title={title} height="100px"/>
    </a>
  </li>
);

export default Image;
