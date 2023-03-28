import { createConfiguration, hooks } from "@midwayjs/hooks"
import * as Koa from "@midwayjs/koa"
import * as dotenv from "dotenv"
import useOpenAi from "./hook/openai"
/**
 * setup midway server
 */
dotenv.config()

export default createConfiguration({
  imports: [Koa, hooks()],
  importConfigs: [{ default: { keys: "session_keys" } }],
  onReady: (contianer, ctx) => {
    useOpenAi()
  }
})
