const KEY_CODE = {
  ENTER: 13,
  ESC: 27,
}

export function onPressEnterKey(e, cb) {
  if (e.keyCode === KEY_CODE.ENTER) {
    cb()
  }
}

export function onPressEscKey(e, cb) {
  if (e.keyCode === KEY_CODE.ESC) {
    cb()
  }
}
