import * as express from "express"
import * as http from "http"
import {join} from "path"
import * as logger from "morgan"
import * as bodyParser from "body-parser"
import * as cookieParser from "cookie-parser"

const app: express.Express = express();
const port: number = 3000;


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(join(__dirname, "public")));
app.route("/")
    .get((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("Hello, world!");
        next();
    });

const server: http.Server = http.createServer(app);

server.listen(port);

server.on('error', (e: Error) => {
    console.log("Error starting server" + e)
});

server.on("listening", () => {
    console.log(`Atacama started on port ${port}`);
});