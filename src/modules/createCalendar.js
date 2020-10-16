export const createCalendar = (year, month) => {
  const date = new Date()
  if (year && month) {
    date.setFullYear(year, month, 1)
  } else {
    date.setDate(1)
  }
  const calendar = [[], [], [], [], [], []]
  const startOffset = date.getDay()
  date.setDate(date.getDate() - startOffset)
  for (let i = 0; i < calendar.length; i++) {
    let j = 0
    while (j < 7) {
      const day = date.getDay()
      const selectable = day !== 6 && day !== 0 && date > new Date()
      calendar[i].push({ date: date.toDateString(), selectable })
      date.setDate(date.getDate() + 1)
      j += 1
    }
  }
  return calendar
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const dayList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]
