export const selectEggClassAtRandom = (alreadyShown: Array<string>): string => {
  const allEggs = ['.Egg--1', '.Egg--2', '.Egg--3', '.Egg--4']

  const filteredEggs = allEggs.filter(egg => !alreadyShown.includes(egg as never))
  const eggIndex = Math.floor(Math.random() * filteredEggs.length)

  return filteredEggs[eggIndex]
}
