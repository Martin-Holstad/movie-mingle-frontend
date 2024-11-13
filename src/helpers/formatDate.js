export default function formatDate(date) {
  if (!date) return;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const removeTime = date.split("T")[0];
  const parts = removeTime.split("-");
  const year = parts[0];
  const month = monthNames[parseInt(parts[1]) - 1]; // Adjusted to 0-based index
  const day = parts[2];

  const switchedDate = month + " " + day + ", " + year;
  return switchedDate;
}
