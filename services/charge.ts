import Card from "../models/card";

async function getCardByToken(token: string): Promise<ICard> {
    return new Promise((resolve, reject) => {
        Card.findOne({token}, (err: any, card: ICard) => {
            if (err) {
                reject(err);
            } else {
                resolve(card);
            }
        });
    });
}

export default getCardByToken;