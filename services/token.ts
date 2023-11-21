import {validate} from "luhn";
import Card from "../models/card";

function generateToken() {
    return Math.random().toString(36).substring(2, 38);
}

function validateCard(cardNumber: string, cvv: string, expirationMonth: string, expirationYear: string) {
    return validate(cardNumber) &&
        cvv.length >= 3 &&
        cvv.length <= 4 &&
        Number(expirationMonth) >= 1 &&
        Number(expirationMonth) <= 12 &&
        Number(expirationYear) >= (new Date().getFullYear()) &&
        Number(expirationYear) <= (new Date().getFullYear() + 5);
}

function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

async function tokenize(cardNumber: string, cvv: string, expirationMonth: string, expirationYear: string, email: string): Promise<string> {
    if (!validateCard(cardNumber, cvv, expirationMonth, expirationYear)) {
        console.log("flores", cardNumber, cvv, expirationMonth, expirationYear)
        throw new Error("Invalid card");
    }

    if (!validateEmail(email)) {
        throw new Error("Invalid email");
    }

    let token = generateToken();

    const card = new Card({
        cardNumber,
        ccv: cvv,
        expirationMonth,
        expirationYear,
        email,
        token,
    });

    console.log("card", card)

    await card.save()

    return token;
}

export default tokenize;