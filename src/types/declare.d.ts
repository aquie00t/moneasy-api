declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "test" | "development" | "production";
			PORT: string;
			ALLOW_LIST: string;
		}
	}
}

export {};
