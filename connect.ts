import {ConnectRouter} from "@connectrpc/connect";
import {ElizaService} from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
    router.service(ElizaService, {
        async say(req) {
            return {
                sentence: `You said: ${req.sentence}`
            }
        },
    });