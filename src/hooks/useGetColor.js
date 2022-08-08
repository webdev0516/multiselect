// External Dependecies
import { useEffect, useState } from "react";
import fuzzaldrin from "fuzzaldrin-plus";

const mockColors = [
  { name: "Red", value: "#DB2D2D" },
  { name: "Orange", value: "#F2994A" },
  { name: "Yellow", value: "#F2C94C" },
  { name: "Green", value: "#27AE60" },
  { name: "Blue", value: "#2F80ED" },
  { name: "Violet", value: "#602FED" },
  { name: "Rebecca Purple", value: "#663399" }
];

const cache = {};

const mockQuery = query => {
  const res = mockColors
    .filter(color => fuzzaldrin.score(color.name, query) > 0)
    .sort((a, b) => {
      const colorA = a.name.toLowerCase();
      const colorB = b.name.toLowerCase();
      return colorA > colorB ? 1 : (colorA < colorB ? -1 : 0);
    });
    
  cache[query] = [];
  for (let color of res) {
     cache[query].push({
      ...color,
      highlight: fuzzaldrin.wrap(color.name, query)
    });
  }

  return cache[query];
};

const queryPromise = query => {
  if (cache[query]) {
    return new Promise(resolve => {
      resolve(cache[query]);
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockQuery(query));
    }, 500);
  });
};

const useGetColor = (query = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (!query.length) {
      setData([]);
      setLoading(false);
      return;
    }

    queryPromise(query).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [query]);

  return { data, loading };
};

export default useGetColor;
