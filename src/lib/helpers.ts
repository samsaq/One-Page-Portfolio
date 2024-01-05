export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInArizona(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Arizona's time
  const offsetArizona = -7; // Arizona is in Central Mountain Standard Time (UTC-7), and we're not adjusting for daylight savings time for now
  now.setHours(now.getUTCHours() + offsetArizona);

  return now;
}

export function formatTimeForArizona(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "MST",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "MST"
  formattedTime += " MST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
