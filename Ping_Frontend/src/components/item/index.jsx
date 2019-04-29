import React from "react";

import "./index.css";

export const Item = ({ item, index }) => {
  const { id, title, description, timestamp } = item;

  const handleOpenMapButton = e => {
    e.preventDefault();
    console.log(`click open map button: ${id}`);
  };

  const handleDetailButton = e => {
    e.preventDefault();
    console.log(`click detail button: ${id}`);
  };

  return (
    <tr className="item-default">
      <th>{index}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>{timestamp}</td>
      <td>
        <a href="#" className="button is-primary" onClick={handleOpenMapButton}>
          <span>Open Map</span>
        </a>
      </td>
      <td>
        <a href="#" className="button is-info" onClick={handleDetailButton}>
          <span>Detail</span>
        </a>
      </td>
    </tr>
  );
};
