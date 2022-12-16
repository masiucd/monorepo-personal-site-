import dayjs from "dayjs"

export function parseDate(date: string, format = "MMM D, YYYY") {
  return dayjs(date).format(format)
}
