export function addComment(author, text) {
  const date = new Date();
  return {
    type: 'ADD_COMMENT',
    id: date.getTime(),
    date: date.toLocaleString(),
    author,
    text,
  }
}

export function deleteComment(id) {
  return { type: 'DELETE_COMMENT', id }
}