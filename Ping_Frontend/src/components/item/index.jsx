import React from "react";

import './index.css'

export const Item = ({ item }) => {
  const { id, title, description, timestamp } = item;

  const handleOpenMapButton = e => {
    e.preventDefault();
    console.log(`click open map bbutton`);
  };

  const handleDetailButton = (e) => {
    e.preventDefault();
    console.log(`click detail button`);
  };

  return (
    <tr className="item-default">
      <th>{id}</th>
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
