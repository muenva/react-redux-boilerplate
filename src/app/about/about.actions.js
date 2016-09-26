import constants from './about.constants'

export default {
  handleAboutClick
}

export function handleAboutClick () {
  return {
    type: constants.HANDLE_ABOUT_CLICK
  }
}
