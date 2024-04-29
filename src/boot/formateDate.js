export function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("id-ID", options);
}

export default formatDate;