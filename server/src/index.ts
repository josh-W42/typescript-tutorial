import express, { Request, Response } from "express";
import { routers } from "./routes";

/*
  Ok so we're trying to use express normally
  and just using type annotations with TS syntax

  but there are some major issues involving integrating
  middleware and the types file makes great assumptions.
  
  Also inputs to the server are not guaranteed to exist
  or be of the correct type...

  This might not be the best way to implement this..
*/

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false })); // if you parse images
app.use(express.json()); // body parser for json

// regular handler
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>You made it</h1>");
});

// let each router set it's own routes
app.use("/api/v1/auth", routers.auth);

app.listen(PORT, () => {
  console.log("Jammin' on Port: ", PORT);
});
