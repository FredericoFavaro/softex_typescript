import express, {Request, Response} from "express";

const app = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Bem-vindo ao meu web service!");
});

// Nova rota para obter informacoes do usuario
app.get("/user", (req: Request, res: Response) => {
    const user = {
        name: "John Doe",
        age: 25,
        email: "john.doe@example.com",
    };
    res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:${PORT}");
});

// curl http://localhost:3000/user