// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

type HelloParams = {
  name: string;
};

// hello route
app.get("/hello/:name", (req, res) => {
  const reqParams = req.params as HelloParams;

  if (!reqParams.name) {
    return res.status(400).send("Missing name parameter");
  }

  const name = reqParams.name;
  res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
