// httpClient.js
const API_BASE = "https://zetainmobiliariaapirest-production.up.railway.app/api";

async function request(endpoint, method = "GET", data = null, auth = false) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  if (data) options.body = JSON.stringify(data);

  if (auth) {
    const token = localStorage.getItem("token");
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(`${API_BASE}${endpoint}`, options);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error ${res.status}: ${errorText}`);
  }

  return res.json();
}

export { request };
