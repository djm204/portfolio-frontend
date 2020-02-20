import * as EggHelper from '../../../components/componentHelpers/EggHelper'

it('if passed empty array, returns one of the 4 desired', () => {
  const pool = ['.Egg--1', '.Egg--2', '.Egg--3', '.Egg--4']
  const result1 = EggHelper.selectEggClassAtRandom([])
  expect(pool.includes(result1)).toEqual(true)
})

it('when passed a class, it do not return same class', () => {
  let alreadyShown = ['.Egg--1', '.Egg--2', '.Egg--3', '.Egg--4']

  for (let i = 0; i < 4; i++) {
    delete alreadyShown[i]
    const result2 = EggHelper.selectEggClassAtRandom(alreadyShown)
    expect(alreadyShown.includes(result2)).toEqual(false)
  }
})

it('when given all 4, returns undefined', () => {
  const pool = ['.Egg--1', '.Egg--2', '.Egg--3', '.Egg--4']
  const result1 = EggHelper.selectEggClassAtRandom(pool)
  expect(result1).toEqual(undefined)
})
