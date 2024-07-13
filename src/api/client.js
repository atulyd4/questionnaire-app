const defaultHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/';
  
  export default async function httpClient(url, options) {
    const { method = 'GET', headers = defaultHeaders, body = undefined } = options || {};
  
    const requestOptions = {
      method,
      headers,
      body: body && !(body instanceof (FormData)) ? JSON.stringify(body) : body,
    };
  
    const response = await fetch(`${apiUrl}/${url}`, requestOptions);
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return response.json();
  }