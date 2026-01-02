import { createapp } from "./app";
import { createServer } from "http";
import { env } from "./config/env";
import { logger } from "./utils/logger";
const main = async () => {
    try{
        const app = createapp()
        const server = createServer(app)
        const PORT = env.AUTH_SERVICE_PORT || 4003
        server.listen(PORT, () => {
            logger.info(`Auth Service is running on port ${PORT}`);
        })
    }catch(error){
        logger.error({ error }, "Failed to start Auth Service");
        process.exit(1);
    }
}

main();