import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import type { Server } from "http";

import configuration from "./utils/configuration";

const app = express();

app.use(helmet());

app.use(
	cors({
		origin: configuration.ALLOW_LIST,
		methods: ["GET", "POST", "PUT", "DELETE"],
		optionsSuccessStatus: 204,
	}),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
	morgan(
		configuration.NODE_ENV === "production"
			? "combined"
			: "dev",
		{
			skip: () => configuration.NODE_ENV === "test",
		},
	),
);

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome To API",
	});
});

export function initServer(
	port: number = configuration.PORT,
): Server {
	return app.listen(port);
}

export function closeServer(server: Server): Server {
	return server.close();
}

export default app;
