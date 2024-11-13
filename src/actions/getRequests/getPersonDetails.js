export default async function fetchPersonDetails(id) {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const response = await fetch(`http://api.themoviedb.org/3/person/${id}`, options);
  const results = await response.json();

  return results;
}
