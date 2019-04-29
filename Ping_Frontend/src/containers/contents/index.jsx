import React from "react";

import { Item } from "../../components/item";

export const ContentsContainer = ({ dataset }) => {
  return (
    <section className="section contents-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {dataset.map((item, index) => (
            <Item key={item.id} item={item} index={dataset.length - index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
