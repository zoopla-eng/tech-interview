import { log } from "@repo/logger";
import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
]

server.use("/items", (_, res) => {

  res.json(items);
});


const menuItems = [
  { id: 1, name: "item 1", diet: "gluten-free" },
  { id: 2, name: "item 2", diet: "vegetarian" },
  { id: 3, name: "item 3",  diet: "vegan" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5",},
  { id: 6, name: "item 6",},
]

server.use("/meals", (_, res) => {

  // Get a 

  console.log(res.req.query)

  const params = res.req.query;

  if (params.diet) {
    const diet = params.diet;
    const filteredItems = menuItems.filter(item => item.diet === diet);
    return res.json(filteredItems);

  }

  res.json(menuItems);
});
