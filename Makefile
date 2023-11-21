
run:
	npx tsx server.ts

client:
	npx tsx client.ts

generate:
	rm -rf ./gen
	npx buf generate proto

mongo:
	docker compose up -d