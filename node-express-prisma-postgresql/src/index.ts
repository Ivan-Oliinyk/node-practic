import express, { Request, Response, Application } from "express";
import { PrismaClient } from "@prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = 5000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const jokes = await prisma.joke.findMany({
      include: { creator: true },
    });
    res.status(200).json(jokes);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const jokes = await prisma.joke.findUnique({
      where: { id: id || undefined },
    });
    res.status(200).json(jokes);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/create/:id", async (req: Request, res: Response) => {
  const { text } = req.body;
  const { id } = req.params;

  console.log(text, id);

  try {
    const jokes = await prisma.joke.create({
      data: {
        text,
        userId: id,
      },
    });

    res.status(200).json(jokes);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

app.delete("/remove/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.joke.delete({
      where: { id },
    });
    res.status(200).json("remove joyk !!!");
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(PORT, () => {
  console.log(`start server http://localhost:${PORT}`);
});
