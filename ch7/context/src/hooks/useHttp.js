import React, {useCallback, useState} from "react"

export const useHttp = () => {
  // Состояние, показывающее прогресс загрузки данных, если false => данные полностью загружены
  const [loading, setLoading] = useState(false)
  // Состояние, показывающее возникшие при загрузке данных ошибки
  const [error, setError] = useState(null)

  // Функция запроса на сервер и получения ответа в формате json
  const request = useCallback(async (url, method, body, headers) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(url, { method, headers, body })
      const data = await response.json()
      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  // Функция очистки ошибки, вызывается обычно после вывода или обработки данных, имеющихся в состоянии error
  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}