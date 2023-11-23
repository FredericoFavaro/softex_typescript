import express, {Request, Response} from "express";
import bodyParser from "body-parser";

const app = express();
const livros = [
    {id: 1, titulo: "Titulo livro 1", autor: "autor livro 1"},
    {id: 2, titulo: "Titulo livro 2", autor: "autor livro 2"},
];

app.use(bodyParser.json());

app.get("/", (req: Request, res:Response) => {
    res.send(`
    <title>Git cheat sheet</title>
    <h1>Git cheat sheet </h1>
    </br>
    <h2>Básico</h2>
    <table>
    <tr>
        <th>Criar repositório:</th>
        <th><code>git init</code></th>
    </tr>
    <tr>
        <th>Checar status:</th>
        <th><code>git status</code></th>
    </tr>
    <tr>
        <th>Adicionar arquivo: </th>
        <th><code>git add <nome do arquivo></code></th>
    </tr>
    <tr>
        <th>Adicionar todos os arquivos:</th>
        <th><code>git add .</code></th>
    </tr>
    <tr>
        <th>Fazer commit:</th>
        <th><code>git commit -m<mensagem do commit></code></th>
    </tr>
    </table>
    `);
});

app.get("/livros", (req: Request, res:Response) => {
    res.send(livros);
    });

app.get("/livros/:id", (req: Request, res:Response) => {
    const livro = livros.find((l) => l.id === parseInt(req.params.id));

    if (!livros) {
        
    }
    });

const porta:number = 3000;

app.listen(porta, () => {
    console.log(`Servidor ON no endereço http://localhost:${porta}`);
});