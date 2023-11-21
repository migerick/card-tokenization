import {createPromiseClient} from "@connectrpc/connect";
import {createConnectTransport} from "@connectrpc/connect-node";
import {TokenService} from "./gen/token_connect";

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "1.1"
});

async function tokens() {
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
    } catch (e: any) {
        console.log(e.rawMessage);
    }
}

async function charges() {
    const headers = new Headers();
    headers.set("Authorization", "N3JmQUNxMhZPiZTt");
    const client = createPromiseClient(TokenService, transport);
    try {
        const res = await client.charges({}, {headers: headers});
        console.log(res);
    } catch (e: any) {
        console.log(e.rawMessage);
    }
}


// comment out the function you don't want to run
void tokens();
void charges();