export default async function getWatchProviders(mediaType) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const response = await fetch(`${serverBaseUrl}/watch-providers?mediaType=${mediaType}`, options);
  const results = await response.json();
  return results;
}
