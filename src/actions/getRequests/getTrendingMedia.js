export default async function getTrendingMedia(category) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const url = `${serverBaseUrl}/trending?category=${category}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const repsonse = await fetch(url, options);
  const results = await repsonse.json();
  return results;
}
