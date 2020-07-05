export const createCardFlipId = (index) => `cardItem-${index}`

export const shouldFlip = (index) => (prev, current) => index === prev || index === current
