import * as http from "http";
import routes from "./connect";
import {connectNodeAdapter} from "@connectrpc/connect-node";
import {cors as connectCors} from "@connectrpc/connect";
import cors from "cors";
import tokenizationConfig from "./config/config";

const env = tokenizationConfig

export function build() {
    const handler = connectNodeAdapter({routes});

    const corsHandler = cors({
        origin: true,
        methods: [...connectCors.allowedMethods],
        allowedHeaders: [...connectCors.allowedHeaders],
        exposedHeaders: [...connectCors.exposedHeaders],
    });

    return http
        .createServer((req, res) => {
            corsHandler(req, res, () => handler(req, res));
        });
}

build().listen({host: env.host, port: env.port});
console.log("Listening on ", env.host, env.port);