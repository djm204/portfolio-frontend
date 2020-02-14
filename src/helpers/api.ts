import 'promise/polyfill'
import 'whatwg-fetch'
import * as globalTypes from '../types/global'

export async function get<T>(request: globalTypes.ApiRequest): Promise<T> {
  const response = await fetch(request.url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}

export async function post<T>(request: globalTypes.ApiRequest): Promise<T> {
  const payload = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.payload),
  }

  const response = await fetch(request.url, payload)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}

export async function put<T>(request: globalTypes.ApiRequest): Promise<T> {
  const payload = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.payload),
  }

  const response = await fetch(request.url, payload)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}

export async function del<T>(request: globalTypes.ApiRequest): Promise<T> {
  const payload = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.payload),
  }

  const response = await fetch(request.url, payload)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}

export async function patch<T>(request: globalTypes.ApiRequest): Promise<T> {
  const payload = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.payload),
  }

  const response = await fetch(request.url, payload)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}
