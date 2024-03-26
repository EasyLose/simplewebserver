
const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server is running and listening at http://localhost:${port}`);