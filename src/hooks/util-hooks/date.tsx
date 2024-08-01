export const dateFormated = (date: string) => {
  const newDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(newDate);
  return formattedDate;
};

export const readingTimeCalc = (
  sentence: string,
  wordsPerMinute: number = 150,
) => {
  const words = sentence.split(" ").length;
  const timeMinutes = words / wordsPerMinute;

  if (timeMinutes < 1) {
    const timeSeconds = timeMinutes * 60;
    return `${timeSeconds.toFixed(0)} secs`;
  } else if (timeMinutes < 60) {
    return `${timeMinutes.toFixed(0)} mins`;
  } else {
    const timeHours = timeMinutes / 60;
    return `${timeHours.toFixed(0)} hrs`;
  }
};
