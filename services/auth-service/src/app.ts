import express , {type Application} from "express";

export const createapp = (): Application => {
    const app = express()
    return app
}