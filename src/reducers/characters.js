const initialState = [
  {
    characterName: "Bryn",
    characterClass: "Druid"
  },
  {
    characterName: "Eric",
    characterClass: "Bard"
  },
  {
    characterName: "Noma",
    characterClass: "Wizard"
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return [ ...state, action.character]
    default:
      return state
  }
}
