import {createPromiseClient} from "@connectrpc/connect";
import {TokenService} from "./gen/token_connect";
import {createConnectTransport} from "@connectrpc/connect-node";

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "1.1"
});

async function main() {
    const client = createPromiseClient(TokenService, transport);
    try {
        const res = await client.tokens({
            email: "gian.corzo@gmail.com",
            cardNumber: "4111111111111111",
            ccv: "123",
            expirationYear: "2025",
            expirationMonth: "09"
        });
        console.log(res);
    }catch (e: any) {
        console.log(e.rawMessage);
    }
}

void main();