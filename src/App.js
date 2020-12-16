import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'

export class App extends Component {


  constructor(props) {
    super(props);

  }
   
  
  render() {
    return (
      <div>
        {this.props.notes.map((note, index) => (
        <p key={index} >Hello, {note.title} from {note.content}!</p>
        ))}
        
        {this.props.online_notes.map((note, index) => (
        <p key={index} >Hello, {note.title} from {note.content}!</p>
        ))}
      </div>
    )
  }

}


// const mapStateToProps = state =>{
//   console.log(state.firestore.ordered)
//     return {
//       notes: state.notes.notes_list,
//       online_notes:state.firestore.ordered.notes
//   }
 
// };

export default compose(firestoreConnect(()=>['notes']),
  connect((state)=>({
    notes:state.notes.notes_list,
    online_notes:state.firestore.ordered.notes
  }))
)(App)


// const mapStateToProps = state => ({
//   notes: state.notes.notes_list,
//   notes:state.firestore.data.notes
// });


// export default connect(
//   mapStateToProps,
// )(App)
