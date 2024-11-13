export default function defaultFilters(mediaCategory) {
  return { page: 1, sortBy: sortBy(mediaCategory), providers: [], genres: [], userScore: { minScore: 0, maxScore: 10 }, releaseDate: releaseDate(mediaCategory) };
}

function releaseDate(mediaCategory) {
  const today = new Date();
  let minDate;
  let maxDate;

  switch (mediaCategory) {
    case "now-playing":
      minDate = new Date(today);
      minDate.setDate(today.getDate() - 14);
      maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 14);
      break;
    case "upcoming":
      minDate = new Date(today);
      minDate.setDate(today.getDate() + 1);
      maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
      break;
    case "on-tv":
      minDate = new Date(today);
      maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 12);
      break;
    case "airing-today":
      minDate = new Date(today);
      maxDate = new Date(today);
      break;
    default:
      minDate = "";
      maxDate = "";
      break;
  }
  if (minDate instanceof Date) minDate = minDate.toISOString().split("T")[0];
  if (maxDate instanceof Date) maxDate = maxDate.toISOString().split("T")[0];

  return { maxDate: maxDate, minDate: minDate };
}

function sortBy(mediaCategory) {
  let sortBy = "";
  switch (mediaCategory) {
    case "top-rated":
      sortBy = "vote_average.desc";
      break;
    default:
      sortBy = "popularity.desc";
      break;
  }
  return sortBy;
}
