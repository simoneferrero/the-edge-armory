import { lighten, darken, fade } from '.'

describe('Given the `colors` helpers', () => {
  const colors = [
    {
      selectedColor: '#bd1414',
      amount: 0.5,
      lightened: '#ec4d4d',
      darkened: '#5f0a0a',
      faded: 'rgba(189, 20, 20, 0.5)',
    },
    {
      selectedColor: '#bd1414',
      amount: 0.1,
      lightened: '#d01616',
      darkened: '#aa1212',
      faded: 'rgba(189, 20, 20, 0.9)',
    },
    {
      selectedColor: '#1431ff',
      amount: 0.5,
      lightened: '#9daaff',
      darkened: '#00118a',
      faded: 'rgba(20, 49, 255, 0.5)',
    },
    {
      selectedColor: '#1431ff',
      amount: 0.1,
      lightened: '#3049ff',
      darkened: '#001ff8',
      faded: 'rgba(20, 49, 255, 0.9)',
    },
  ]

  colors.forEach(({ selectedColor, amount, lightened, darkened, faded }) => {
    describe('and the `lighten` helper', () => {
      it(`should correctly lighten ${selectedColor} by ${amount}`, () => {
        const result = lighten(selectedColor, amount)

        expect(result).toEqual(lightened)
      })
    })

    describe('and the `darken` helper', () => {
      it(`should correctly darken ${selectedColor} by ${amount}`, () => {
        const result = darken(selectedColor, amount)

        expect(result).toEqual(darkened)
      })
    })

    describe('and the `fade` helper', () => {
      it(`should correctly fade ${selectedColor} by ${amount}`, () => {
        const result = fade(selectedColor, amount)

        expect(result).toEqual(faded)
      })
    })
  })
})
