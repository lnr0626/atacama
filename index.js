// @flow
import express from "express"
import http from "http"
import {join} from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app: express.Express = express();
const port: number = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(join(__dirname, "public")));
app.route("/")
    .get((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("Hello, world!");
        next();
    });

const server = http.createServer(app);

server.listen(port);

server.on('error', (e: Error) => {
    console.log("Error starting server" + e.message)
});

server.on("listening", () => {
    console.log(`Atacama started on port ${port}`);
});