import {Code, ConnectError, ConnectRouter} from "@connectrpc/connect";
import {TokenService} from "../gen/token_connect";
import tokenize from "../services/token";
import {ChargeRequest, ChargeResponse, TokenRequest, TokenResponse} from "../gen/token_pb";
import getCardByToken from "../services/charge";

export default (router: ConnectRouter) =>
    router.service(TokenService, {
        async tokens(req: TokenRequest): Promise<TokenResponse> {
            try {
                const token = await tokenize(req.cardNumber, req.ccv, req.expirationMonth, req.expirationYear, req.email);
                return new TokenResponse({
                    token: token,
                })
            } catch (e: any) {
                throw new ConnectError(e.message, Code.InvalidArgument)
            }
        },
        async charges(req: ChargeRequest): Promise<ChargeResponse> {
            try {
                let card = await getCardByToken("");
                return new ChargeResponse(
                    {
                        cardNumber: card.cardNumber,
                        expirationMonth: card.expirationMonth,
                        expirationYear: card.expirationYear,
                        email: card.email,
                    }
                )
            } catch (e: any) {
                throw new ConnectError(e.message, Code.InvalidArgument)
            }
        }
    });