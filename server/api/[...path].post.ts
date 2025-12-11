import { defineEventHandler, readBody, getRequestURL, createError } from 'h3'

interface JsonRpcRequest {
  jsonrpc: '2.0'
  method: string
  params?: any
  id: string | number
}

interface JsonRpcResponse<T = any> {
  jsonrpc: '2.0'
  result?: T
  error?: {
    code: number
    message: string
    data?: any
  }
  id: string | number
}

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const originalPath = url.pathname
  
  // 從 /api/ 後面提取 method 名稱
  // 例如: /api/auth/login -> auth.login
  const methodName = originalPath
    .replace(/^\/api\//, '')
    .replace(/\//g, '.')
  
  try {
    const config = useRuntimeConfig(event)
    const backendUrl = config.public.backendUrl
    const body = await readBody(event)
    
    // 構建 JSON-RPC 請求
    const jsonRpcRequest: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: methodName,
      params: body || {},
      id: Date.now(),
    }

    console.log('config.public.backendUrl = ',config.public.backendUrl);
    
    console.log('backendUrl = ',backendUrl);
    
    
    console.log(`[JSON-RPC] ${methodName}`, jsonRpcRequest.params)
    
    const res: JsonRpcResponse = await $fetch(`${backendUrl}/jsonrpc`, {
      method: 'POST',
      body: jsonRpcRequest,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // 處理 JSON-RPC 響應
    if (res.error) {
      throw createError({
        statusCode: 400,
        statusMessage: res.error.message || 'JSON-RPC 錯誤',
        data: res.error,
      })
    }

    console.log(`[JSON-RPC Response] ${methodName}`, res.result)
    return res.result
  } catch (error: any) {
    console.error(`[JSON-RPC Error] ${methodName}:`, error)
    
    // 處理不同類型的錯誤
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Server proxy 錯誤',
    })
  }
})