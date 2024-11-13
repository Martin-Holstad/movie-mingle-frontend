export default async function fetchReviews(mediaType, id) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const url = `${serverBaseUrl}/reviews?mediaType=${mediaType}&id=${id}&page=1`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const repsonse = await fetch(url, options);
  const results = await repsonse.json();
  return results;
}
