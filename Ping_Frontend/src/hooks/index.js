import { useState, useEffect } from "react";

export function useFetch(url, reactiveValue) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  const condition = [reactiveValue] || [];

  useEffect(() => {
    fetchData();
  }, condition);

  return [data, loading];
}
