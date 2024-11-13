export default async function fetchMediaDetails(mediaType, id) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const response = await fetch(`${serverBaseUrl}/mediaDetails?mediaType=${mediaType}&id=${id}`, options);
  const results = await response.json();
  return results;
}
