type Word = {
  id: number,
  en: string,
  ru: string,
  learned: boolean
}

type WordsList = Array<Word>

export { Word, WordsList };