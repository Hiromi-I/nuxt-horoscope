import { SIGN_MAP } from "@/utils/sign"

export type API_Response = {
  horoscope: DayResult,
}

export type DayResult = {
  [key: string]: SignResult[]
}

export type SignResult = {
  content: string,
  item: string,
  money: number,
  total: number,
  job: number,
  color: string,
  day: number,
  love: number,
  rank: number,
  sign: keyof typeof SIGN_MAP,
}