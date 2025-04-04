export default class ConfigurationError extends Error {
	public cause?: Error;
	public constructor(message = "Configuration Error") {
		super(message);

		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}
