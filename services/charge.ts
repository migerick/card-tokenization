import Card from "../models/card";

async function getCardByToken(token: string): Promise<ICard> {
    const card = await Card.findOne({token}).exec();
    if (!card) {
        throw new Error('Hubo un problema al obtener la tarjeta. Por favor, verifica nuevamente tus datos.');
    }

    const currentDate: Date = new Date();

    if (currentDate > card.expiredAt) {
        throw new Error('La tarjeta ha expirado. Por favor, utiliza otra tarjeta.');
    }

    return card;
}

export default getCardByToken;