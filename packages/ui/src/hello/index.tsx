"use client";

import { useEffect, useState } from "react";

const useData = (): string => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch("http://localhost:5001/hello");
      const json: unknown = await response.json();
      setData(typeof json === "string" ? json : "");
    }
    fetchData().catch((_) => {
      setData("Error");
    });
  }, []);
  return data;
};

export function Hello(): JSX.Element {
  const data = useData();

  return <h1>{data}</h1>;
}
