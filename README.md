# Tokenización de Tarjetas

API for card authentication

## Requisitos

- Node.js >= 16
- MongoDB

## Instalación

1. Clona el repositorio: `git clone https://github.com/migerick/cardtokenization.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env` basado en el archivo `.env.example`.

## Docker compose mongo

Debe estar en la raiz del proyecto para que funcione correctamente.
Configurar las variables de entorno en el archivo .env con los siguientes valores por defecto en el archivo `env`.

```bash
CARD_MONGO_USERNAME="root"
CARD_MONGO_PASSWORD="password"
CARD_MONGO_URL="mongodb://root:password@host:27017/admin"
CARD_MONGO_DATABASE="db"
```

Para levantar el contenedor de mongo ejecutar el siguiente comando:

```bash
docker-compose up -d
```

## Uso

1. Inicia el servidor: `npx tsx server.ts`
2. Accede a la API en `http://localhost:8080` o en el puerto que hayas configurado en el archivo `.env`.

## Makefile

Si desea usar el comando make, debe instalarlo en su sistema operativo,
en el caso de linux puede ejecutar el siguiente comando:

```bash
sudo apt install make
```

Or archilinux

```bash
sudo pacman -S make
```

En el caso de windows puede descargarlo desde el siguiente enlace:
[Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)

## Uso Makefile en el proyecto

Pare levantar el contenedor de mongo ejecutar el siguiente comando:

```bash
make run
```

para levantar el contenedor de mongo ejecutar el siguiente comando:

```bash
make mongo
```

para ejecutar los clientes de ejemplo ejecutar el siguiente comando:

```bash
make client
```

## Endpoints en Postman

Tokens

```bash
POST http://localhost:8080/connectrpc.token.v1.TokenService/Tokens
```

```json
{
  "email": "gian.corzo@gmail.com",
  "cardNumber": "4111111111111111",
  "ccv": "123",
  "expirationYear": "2025",
  "expirationMonth": "09"
}
```

Charges

```bash
POST http://localhost:8080/connectrpc.token.v1.TokenService/Charges

headers
{
  "Authorization": "{{token}}"
}
```
Enviar un json vacio
```json
{}
```

## Autor

- ‍💻 Miguel Flores
- ✉️ Email: mfloresa.dev@gmail.com
- 🧑‍💻 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/miguelflores-ing/)