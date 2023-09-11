export const formatDate = (date: Date): string => {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const getToday = (): string => {
  return formatDate(new Date())
}

export const get10DaysLater = (): string => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 10)
  return formatDate(targetDate)
}
