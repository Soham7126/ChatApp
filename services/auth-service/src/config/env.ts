import "dotenv/config";

import { createEnv, z } from "@chat/common";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.string().default("4000"),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN: z.string().default("1d"),
    JWT_REFRESH_SECRET: z.string().min(32), 
    JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),
    AUTH_SERVICE_PORT: z.coerce.number().int().min(0).max(65535).default(4003)
})

type envtype = z.infer<typeof envSchema>

export const env: envtype = createEnv(envSchema,{
    serviceName: 'auth-service'
})

export type Env = typeof env;