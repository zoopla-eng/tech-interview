"use client";

import { useEffect, useState } from "react";


type DietaryTypes = 'gluten-free' | 'vegetarian' | 'vegan';

type DietaryLabel = DietaryTypes[]

type Meals = [
  {
    id: number;
    name: string;
    calories: number;
    dietaryLabel?: DietaryLabel[]
  },
];

const useItems = (): Meals | never[] => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:5001/meals");
      const data = await response.json();
      setItems(data);
    }
    fetchItems().catch((e) => console.log({ e }));
  }, []);
  return items;
};

export function MealsList(): JSX.Element {
  const items = useItems();
  console.log({ items });

  return (
    <div>
      <h1>Hello</h1>
      {items?.map((item, idx) => (
        <div key={`my-items-${idx}`}>{item.name}</div>
      ))}
    </div>
  );
}
