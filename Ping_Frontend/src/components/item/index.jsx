import React from "react";

import "./index.css";

export const Item = ({ item, index, setCurrentIndex, dataset }) => {
  const { id, title, description, category } = item;

  const handleClickItem = () => {
    const index = dataset.indexOf(dataset.filter(data => data.id === id)[0]);

    if (index < 0) {
      return;
    }
    setCurrentIndex(index);
  };

  const handleDetailButton = e => {
    e.preventDefault();
  };

  return (
    <tr className="item-default" onClick={handleClickItem}>
      <td>{index}</td>
      <td>{title}</td>
      <td>
        {description}
        <div className="tags has-addons">
          <span className="tag">category</span>
          <span className="tag is-primary">{category}</span>
        </div>
      </td>
      <td>
        <a href="#" className="button is-info" onClick={handleDetailButton}>
          <span>Detail</span>
        </a>
      </td>
    </tr>
  );
};
