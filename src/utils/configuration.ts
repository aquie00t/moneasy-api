import { config } from "dotenv";
import ConfigurationError from "../errors/runtime/configuration-error";
import type { IConfiguration } from "../types/configuration";

config({ path: `.env.${process.env.NODE_ENV}` });

if (!process.env.PORT) {
	throw new ConfigurationError(
		"PORT is not defined. Please add a PORT value in your .env file",
	);
}

const port = Number(process.env.PORT);

if (isNaN(port) || port < 0 || port > 65535) {
	throw new ConfigurationError(
		"Invalid PORT value. PORT must be a number between 0 and 65535",
	);
}

if (!process.env.ALLOW_LIST) {
	throw new ConfigurationError(
		"ALLOW_LIST is not defined. Please add an ALLOW_LIST value in your .env file.",
	);
}

const allowArray = process.env.ALLOW_LIST.split(",");

const configuration: IConfiguration = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: port,
	ALLOW_LIST: allowArray,
};

export default configuration;
