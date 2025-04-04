import { Server } from "http";
import { closeServer, initServer } from "./app";

function main(): Server {
	return initServer();
}

const server = main();

process.on("SIGINT", () => {
	closeServer(server);
});
