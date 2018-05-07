var initialState = {
  theGoodBoy: 'Charlie'
}

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
    return Object.assign(
      {},
      state,
      {theGoodBoy: action.nickname}
    )
    default:
    return state
  }
}

export default reducer




