export interface IConfiguration {
	NODE_ENV: "test" | "development" | "production";
	PORT: number;
	ALLOW_LIST: string[];
}
