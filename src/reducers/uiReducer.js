/* eslint-disable prettier/prettier */
const initialState = {
  sidebarShow: true,
}

export const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'SET':
      return { ...state, ...rest }
    default:
      return state
  }
}
