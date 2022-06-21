export const getRelativeTimeDifference = (
  current: number,
  previous: number
) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    // const seconds = Math.round(elapsed / 1000);
    // return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    return "just now";
  }

  if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  const years = Math.round(elapsed / msPerYear);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};
