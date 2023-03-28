import { Api, Post, Headers, useContext } from "@midwayjs/hooks"
import useOpenAi from "./hook/openai"
import customRespone from "./helper/customRespone"
export default Api(
  Post("/conversation"),
  Headers<{
    "Content-Type": string
  }>(),
  async (text: string) => {
    try {
      const ctx = useContext()
      const openai = useOpenAi()
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }]
      })
      ctx.Headers = completion.headers
      return customRespone("ok", completion.data)
    } catch (error) {
      console.error(error)
    }
  }
)
