const initialState = {
    notes_list: [{
        id: 1,
        title: "Note 1 Title",
        content: "Note 1 Content"
    },
    {
        id: 2,
        title: "Note 2 Title",
        content: "Note 2 Content"
    },
    {
        id: 3,
        title: "Note N Title",
        content: "Note N Content"
    }
]
}

export default function noteReducer(state = initialState, action) {
    switch (action.type) {

        case action.ADD_TODO: {
            const newnote= action.payload
            return Object.assign({}, state, {
                todos: state.notes_list.concat(newnote)
            })
            }

        case action.REMOVE_TODO:
            const notes = state.notes_list.filter(note => note.id != action.payload.id)
            return Object.assign({}, state , {
                notes
            })
        default:
            return state
    }
}