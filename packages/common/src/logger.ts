import pino from "pino";
import type { Logger , LoggerOptions} from "pino";

type createloggeroptions = LoggerOptions & {
  name?: string;

};

export const createlogger = (options: createloggeroptions ): Logger => {
    const {name, ...pinoOptions} = options;
    
    const transport =
  process.env.NODE_ENV === "development"
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
        },
      }
    : undefined;
    return pino({
      name: name || "app-logger",
      level: pinoOptions.level || (process.env.LOG_LEVEL as string) || "info",
      transport,
      ...pinoOptions,
    });
}