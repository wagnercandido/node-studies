export class Logger {

	private INFO = 'INFO';
	private WARN = 'WARN';
	private ERROR = 'ERROR';

	info(message: string, obj?: any) {
		this.log(this.INFO, message, obj);
	}

	warn(message: string, obj?: any) {
		this.log(this.WARN, message, obj);
	}

	error(message: string, obj?: any) {
		this.log(this.ERROR, message, obj);
	}

	private log(type: string, message: string, obj?: any) {
		console.log('[LOG]  -', this.mapperMsg(type), `[${type}]`, new Date(), '  -  ', message, !!obj ? obj : '');
	}

	private mapperMsg(type: string): string {
		switch (type) {
			case this.INFO:
				return '\x1b[36m';
			case this.WARN:
				return '\x1b[33m';
			case this.ERROR:
				return '\x1b[31m';
			default:
				return '\x1b[36m';
		}
	}

}
