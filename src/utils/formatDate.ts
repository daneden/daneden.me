interface Options {
  year?: "numeric" | "2-digit"
  month?: "long" | "short"
  day?: "numeric"
  timeZone?: string
}

export default function formatDate(date: Date | string = ""): string {
  const options: Options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // Post dates are calendar dates; don't let the build machine's zone shift them.
    timeZone: "UTC",
  }

  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", options)
  } else {
    return new Date(date).toLocaleDateString("en-US", options)
  }
}
