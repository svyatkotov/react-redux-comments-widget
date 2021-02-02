export default function commentsWidget(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {id: action.id, date: action.date, author: action.author, text: action.text}
      ]
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}