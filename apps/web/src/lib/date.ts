import dayjs from "dayjs"

export function parseDate(date: string, format = "MMMM D, YYYY") {
  return dayjs(date).format(format)
}
