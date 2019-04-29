import React from "react";

import "./index.css";

export const Item = ({ item, index, setCurrentIndex, dataset }) => {
  const { id, title, description, category, status, tags } = item;

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

  const getTagByStatus = () => {
    switch (status) {
      case "open":
        return <span className="tag is-danger">Red</span>;
      case "in-progress":
        return <span className="tag is-warning">Orange</span>;
      case "close":
        return <span className="tag is-success">Green</span>;
      default:
        return <span className="tag">Normal</span>;
    }
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
          {tags &&
            tags.map(tag => (
              <span className="tag is-info is-rounded">{tag}</span>
            ))}
        </div>
      </td>
      <td>{getTagByStatus()}</td>
      <td>
        <span className="tag is-link" onClick={handleDetailButton}>
          Detail
        </span>
      </td>
    </tr>
  );
};
