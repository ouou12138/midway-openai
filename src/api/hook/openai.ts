import { Configuration, OpenAIApi } from "openai"
let openai: OpenAIApi
const useOpenAi = () => {
  const apiKey = process.env.VITE_API_KEY
  if (!apiKey) throw new Error("请配置api key")
  const configuration = new Configuration({
    apiKey: apiKey
  })
  if (!openai) openai = new OpenAIApi(configuration)
  return openai
}

export default useOpenAi
