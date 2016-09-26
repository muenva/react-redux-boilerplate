export default {
  get,
  post,
  put,
  remove
}

function request (method, url, data) {
  return new Promise((resolve, reject) => {
    const xhr = typeof XMLHttpRequest !== 'undefined'
      ? new XMLHttpRequest()
      : new window.ActiveXObject('Microsoft.XMLHTTP')
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          // always get parsed response
          let responseData
          try {
            responseData = JSON.parse(xhr.response)
          } catch (exception) {
            responseData = xhr.response
          }
          resolve(responseData)
        } else {
          reject(xhr.status)
        }
      }
    }
    if (data) {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

function get (url) {
  return request('GET', url)
}

function post (url, data) {
  return request('POST', url, data)
}

function put (url, data) {
  return request('PUT', url, data)
}

function remove (url) {
  return request('DELETE', url)
}
