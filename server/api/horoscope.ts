export default defineEventHandler((event) => {
    const { year, month, day } = getQuery(event)
    try {
      new Date(`${year}/${month}/${day}`)
    } catch(e) {
      return createError({
        status: 400,
      })
    }
    return $fetch(`http://api.jugemkey.jp/api/horoscope/free/${year}/${month}/${day}`)
  })