//importar modulo express
import express, { Request, Response } from "express";

// cRIA UMA INSTANCIA DO EXPRESS
const app = express();

// Configura uma rota basica
app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo ao meu web service!!");
})