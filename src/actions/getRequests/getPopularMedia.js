export default async function getPopularMedia(category) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const url = `${serverBaseUrl}/popular?category=${category}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const repsonse = await fetch(url, options);
  const results = await repsonse.json();
  return results;
}
