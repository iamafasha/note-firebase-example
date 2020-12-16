export function addNote(tile , content) {
    return {
      type: 'ADD_TODO',
      payload:{tile, content}
    }
  }



export function deleteNote(id) {
    return {
      type: 'REMOVE_TODO',
      payload:id
    }
  }