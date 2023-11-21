import {validate} from "luhn";
import {randomBytes} from "crypto";
import Card from "../models/card";

function generateToken(): string {
    const tokenLength = 16;
    const buffer = randomBytes(tokenLength);
    return buffer.toString('base64')
        .replace(/[^a-zA-Z0-9]/g, '')
        .substring(0, tokenLength);
}

function validateCard(
    cardNumber: string,
    cvv: string,
    expirationMonth: string,
    expirationYear: string
): string | null {
    if (!validate(cardNumber)) {
        return 'Número de tarjeta inválido';
    }

    if (cvv.length < 3 || cvv.length > 4) {
        return 'CVV inválido';
    }

    const numericExpirationMonth: number = Number(expirationMonth);
    if (numericExpirationMonth < 1 || numericExpirationMonth > 12) {
        return 'Mes de vencimiento inválido';
    }

    const currentYear: number = new Date().getFullYear();
    const numericExpirationYear = Number(expirationYear);
    if (numericExpirationYear < currentYear || numericExpirationYear > (currentYear + 5)) {
        return 'Año de vencimiento inválido';
    }

    return null;
}


function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

async function tokenize(cardNumber: string, cvv: string, expirationMonth: string, expirationYear: string, email: string): Promise<string> {
    let valid: string | null = validateCard(cardNumber, cvv, expirationMonth, expirationYear)
    if (valid !== null) {
        throw new Error(valid);
    }

    if (!validateEmail(email)) {
        throw new Error("Email inválido");
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

    await card.save()

    return token;
}

export default tokenize;