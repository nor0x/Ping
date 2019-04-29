import React from "react";

import { Item } from "../../components/item";

export const ContentsContainer = () => {
  const dataset = [
    {
      id: 1,
      title: "title1",
      description: "description1description1description1",
      timestamp: 123123
    },
    {
      id: 2,
      title: "title2",
      description: "description2description2description2",
      timestamp: 123123
    },
    {
      id: 3,
      title: "title3",
      description: "description3description2description3",
      timestamp: 123123
    },
    {
      id: 4,
      title: "title3",
      description: "description4description2description4",
      timestamp: 123123
    },
    {
      id: 5,
      title: "title3",
      description: "description5description2description5",
      timestamp: 123123
    },
    {
      id: 6,
      title: "title3",
      description: "description6description2description6",
      timestamp: 123123
    }
  ];

  return (
    <section className="section contents-container">
      <table className="table is-hoverable is-fullwidth">
        <thead />
        <tbody>
          {dataset.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
