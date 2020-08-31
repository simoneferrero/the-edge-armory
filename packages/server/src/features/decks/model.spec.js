import DecksModel from './model'

import { id, owner, values } from '../../mocks/decks'

describe('Given the `decks` model', () => {
  const testCases = [
    {
      method: 'getAll',
      result: DecksModel.getAll(owner),
      expectedResult:
        "SELECT * FROM decks WHERE owner = 'auth0|5fgb204b45bd7e2319d15671'",
    },
    {
      method: 'get',
      result: DecksModel.get(owner, id),
      expectedResult:
        "SELECT * FROM decks WHERE owner = 'auth0|5fgb204b45bd7e2319d15671' AND id = '1'",
    },
    {
      method: 'post',
      result: DecksModel.post(values),
      expectedResult:
        "INSERT INTO decks (owner, name, faction) VALUES ('auth0|5fgb204b45bd7e2319d15671', 'Test Deck', 'faceless')",
    },
  ]

  testCases.forEach(({ method, result, expectedResult }) => {
    describe(`and the \`${method}\` method`, () => {
      it('should return the correct SQL', () => {
        expect(result).toEqual(expectedResult)
      })
    })
  })
})
