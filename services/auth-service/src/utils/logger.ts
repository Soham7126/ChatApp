import { createlogger } from '@chat/common';
import type { Logger } from '@chat/common';

export const logger: Logger = createlogger({ name: 'auth-service-logger' });