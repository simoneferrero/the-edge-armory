import color from 'color'

export const lighten = (selectedColor, amount) =>
  color(selectedColor).lighten(amount).hex().toLowerCase()

export const darken = (selectedColor, amount) =>
  color(selectedColor).darken(amount).hex().toLowerCase()

export const fade = (selectedColor, amount) =>
  color(selectedColor).fade(amount).rgb().string().toLowerCase()
