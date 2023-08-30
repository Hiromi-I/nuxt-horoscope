export const useDateSpan = () => {
  const formatDate = (date: Date): string => {
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const min = formatDate(new Date())
  const max = (() => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 10)
    return formatDate(maxDate)
  })()

  return {
    min,
    max,
  }
}