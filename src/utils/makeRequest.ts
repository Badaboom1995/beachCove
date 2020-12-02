const serverUrl = 'https://front-test.beta.aviasales.ru'
const commonHeaders: HeadersInit = new Headers()

type Methods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export const makeRequest = async (url: String, method: Methods, body?) => {
  const fetchConfig: any = { method, headers: commonHeaders }
  if (body) fetchConfig.body = JSON.stringify(body)
  let data
  const response = await fetch(`${serverUrl}${url}`, fetchConfig)
  if (response.ok) data = await response.json()
  return { data, status: response.status }
}
