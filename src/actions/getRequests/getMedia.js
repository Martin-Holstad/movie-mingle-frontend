export default async function getMedia(mediaType, mediaCategory, filters) {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

  const { page, sortBy, providers, releaseDate, genres, userScore } = filters;

  const genresIDS = genres.map((genre) => genre.id).join(",");
  const providerIDS = providers.map((provider) => provider.provider_id).join("|");

  const mediaTypeParams = `?mediaType=${mediaType}`;
  const mediaCategoryParams = `&mediaCategory=${mediaCategory}`;
  const sortByParams = `&sortBy=${sortBy}`;
  const providersParams = `&providers=${providerIDS}`;
  const releaseDateParams = `&releaseDateMin=${releaseDate.minDate}&releaseDateMax=${releaseDate.maxDate}`;
  const genresParams = `&genres=${genresIDS}`;
  const userScoreParams = `&userScoreMin=${userScore.minScore}&userScoreMax=${userScore.maxScore}`;
  const pageParams = `&page=${page}`;

  const url = `${serverBaseUrl}/media${mediaTypeParams}${mediaCategoryParams}${sortByParams}${providersParams}${releaseDateParams}${genresParams}${userScoreParams}${pageParams}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const repsonse = await fetch(url, options);
  const results = await repsonse.json();

  return results;
}
