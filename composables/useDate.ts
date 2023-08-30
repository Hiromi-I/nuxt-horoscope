export const useDate = () => {
    const targetDate = ref("")

    const changeDate = (event: Event) => {
      targetDate.value = (event.target as HTMLInputElement).value as string;
    }
    return {
      targetDate,
      changeDate,
    }
  }