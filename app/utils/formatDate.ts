interface Options {
  year?: "numeric" | "2-digit"
  month?: "long" | "short"
  day?: "numeric"
}

export default function formatDate(date: Date | string = ""): string {
  const options: Options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", options)
  } else {
    return new Date(date).toLocaleDateString("en-US", options)
  }
}
