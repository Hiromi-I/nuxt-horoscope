export const SIGN_MAP = {
  "牡羊座": "aries",
  "牡牛座": "taurus",
  "双子座": "gemini",
  "蟹座": "cancer",
  "獅子座": "leo",
  "乙女座": "virgo",
  "天秤座": "libra",
  "蠍座": "scorpio",
  "射手座": "sagittarius",
  "山羊座": "capricorn",
  "水瓶座": "aquarius",
  "魚座": "pisces",
};

export const getImagePath = (jSignName: keyof typeof SIGN_MAP) => {
  const eSignName = SIGN_MAP[jSignName]
  return new URL(`../assets/images/${eSignName}.jpg`, import.meta.url).href;
}