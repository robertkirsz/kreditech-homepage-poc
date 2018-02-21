import { store, getState, types } from 'store'
import { sleep } from 'utils'

const actions = {
  appReady: () => ({ type: types.APP_READY }),
  showNavbar: () => ({ type: types.SHOW_NAVBAR }),
  showIntroSection: () => async () => {
    dispatch({ type: types.SHOW_INTRO_BOXES })
    await sleep(1000)
    dispatch({ type: types.SHOW_INTRO_CONTENT })
    dispatch().showNavbar()
    await sleep(1000)
    dispatch({ type: types.SHOW_INTRO_SCROLL_BUTTON })
  },
  startRequest: name => () =>
    !getState().requests[name] && dispatch({ type: types.START_REQUEST, name }),
  stopRequest: name => () =>
    getState().requests[name] && dispatch({ type: types.STOP_REQUEST, name }),
  // Errors
  showError: error => ({ type: types.SHOW_ERROR, error }),
  hideError: id => () =>
    getState().errors.find(error => error.id === id) &&
    dispatch({ type: types.HIDE_ERROR, id })
}

const dispatcher = Object.keys(actions).reduce(
  (all, action) => ({
    ...all,
    [action]: (...payload) =>
      new Promise((resolve, reject) =>
        store.dispatch(actions[action](...payload, resolve, reject))
      )
  }),
  {}
)

export const dispatch = action => {
  if (action) store.dispatch(action)
  else return dispatcher
}
