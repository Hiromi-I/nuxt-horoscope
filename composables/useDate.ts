export const useDate = () => {
  const targetDate = useState('target-date', () => "")

  const changeDate = (newDate: string) => {
    targetDate.value = newDate;
  }
  return {
    targetDate: readonly(targetDate),
    changeDate,
  }
}