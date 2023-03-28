import { Api, Post } from "@midwayjs/hooks"
import useOpenAi from "./hook/openai"
import customRespone from "./helper/customRespone"

export default Api(Post("/get-models"), async () => {
  try {
    const openai = useOpenAi()
    let list = await openai.listModels()
    return customRespone("ok", list.data)
  } catch (error: any) {
    return customRespone("error", null, "获取模型失败")
  }
})
