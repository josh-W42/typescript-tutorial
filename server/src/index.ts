import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>You made it</h1>");
});

app.listen(PORT, () => {
  console.log("Jammin' on Port: ", PORT);
});
