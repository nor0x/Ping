import React, { useState } from "react";

import { changeStatusOfPing } from "../../api";

import "./index.css";

export const Item = ({
  item,
  index,
  setCurrentIndex,
  dataStatus,
  setDataStatus,
  dataset
}) => {
  const { id, pingIndex, title, description, category, status, tags } = item;
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isDropActive, changeDropActiveStatus] = useState(false);

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

  const handleClickDropDown = () => {
    changeDropActiveStatus(!isDropActive);
  };

  const handleClickDropItem = async status => {
    try {
      await changeStatusOfPing({ id, status });
      setCurrentStatus(status);
      setDataStatus(dataStatus + 1);
    } catch (e) {
      console.error(e);
    } finally {
      changeDropActiveStatus(false);
    }
  };

  const getTagByStatus = () => {
    switch (currentStatus) {
      case "open":
        return <span className="tag is-danger dropdown-trigger">Open</span>;
      case "in-progress":
        return (
          <span className="tag is-warning dropdown-trigger">Info required</span>
        );
      case "close":
        return (
          <span className="tag is-success dropdown-trigger">Approved</span>
        );
      default:
        return <span className="tag dropdown-trigger">Normal</span>;
    }
  };

  return (
    <tr className="item-default" onClick={handleClickItem}>
      <td>{pingIndex}</td>
      <td>{title}</td>
      <td>
        {description}
        <div className="tags has-addons">
          <span className="tag">category</span>
          <span className="tag is-primary">{category}</span>
          {tags &&
            tags.map((tag, index) => (
              <span key={`item_tag_${index}`} className="tag is-info tag-style">
                {tag}
              </span>
            ))}
        </div>
      </td>
      <td style={{ width: "86px" }}>
        <div
          className={`dropdown ${isDropActive ? "is-active" : ""}`}
          onClick={handleClickDropDown}
        >
          {getTagByStatus()}
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div
              className="dropdown-content"
              style={{ padding: "12px", textAlign: "center" }}
            >
              <span
                className="tag is-danger dropdown-item"
                onClick={() => handleClickDropItem("open")}
                style={{ opacity: "0.7" }}
              >
                Open
              </span>
              <span
                className="tag is-warning dropdown-item"
                onClick={() => handleClickDropItem("in-progress")}
                style={{ opacity: "0.7" }}
              >
                Info required
              </span>
              <span
                className="tag is-success dropdown-item"
                onClick={() => handleClickDropItem("close")}
                style={{ opacity: "0.7" }}
              >
                Approved
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="tag is-link" onClick={handleDetailButton}>
          Detail
        </span>
      </td>
    </tr>
  );
};
