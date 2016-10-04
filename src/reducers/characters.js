const initialState = [
  {
    characterName: "Bryn",
    characterClass: "Druid",
    items: [
      {
        itemType: "Potion",
        itemName: "Potion of Greate Healing",
        itemRarity: "Rare"
      }
    ]
  },
  {
    characterName: "Eric",
    characterClass: "Bard",
    items: [
      {
        itemType: "Potion",
        itemName: "Potion of Greate Healing",
        itemRarity: "Rare"
      }
    ]
  },
  {
    characterName: "Noma",
    characterClass: "Wizard",
    items: [
      {
        itemType: "Potion",
        itemName: "Potion of Greate Healing",
        itemRarity: "Rare"
      }
    ]
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
