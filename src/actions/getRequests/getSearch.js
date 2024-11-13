export default async function fetchSearch(value) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const url = `${serverBaseUrl}/search?value=${value}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const repsonse = await fetch(url, options);
  const results = await repsonse.json();
  return results;
}
