import { combineReducers } from 'redux'

import { types } from 'store'

const initialState = {
  layout: {
    isNavbarVisible: false,
    areIntroBoxesVisible: false,
    isIntroContentVisible: false,
    isIntroScrollButtonVisible: false
  },
  requests: {},
  errors: [],
  appReady: false
}

const reducers = {
  layout: {
    [types.SHOW_NAVBAR]: state => ({ ...state, isNavbarVisible: true }),
    [types.SHOW_INTRO_BOXES]: state => ({
      ...state,
      areIntroBoxesVisible: true
    }),
    [types.SHOW_INTRO_CONTENT]: state => ({
      ...state,
      isIntroContentVisible: true
    }),
    [types.SHOW_INTRO_SCROLL_BUTTON]: state => ({
      ...state,
      isIntroScrollButtonVisible: true
    })
  },
  requests: {
    [types.START_REQUEST]: (state, action) => ({
      ...state,
      [action.name]: true
    }),
    [types.STOP_REQUEST]: (state, action) => ({
      ...state,
      [action.name]: false
    })
  },
  errors: {
    [types.SHOW_ERROR]: (state, action) => [
      ...state.filter(error => error.id !== action.error.id),
      action.error
    ],
    [types.HIDE_ERROR]: (state, action) =>
      state.filter(error => error.id !== action.id)
  },
  appReady: {
    [types.APP_READY]: () => true
  }
}

const createReducer = (name, initialState) => (state = initialState, action) =>
  (reducers[name][action.type]
    ? reducers[name][action.type](state, action)
    : state)

const uncombinedReducers = {
  ...Object.keys(reducers).reduce(
    (all, name) => ({
      ...all,
      [name]: createReducer(name, initialState[name])
    }),
    {}
  )
}

export default combineReducers(uncombinedReducers)
