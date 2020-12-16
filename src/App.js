import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as noteActions from './actions/noteActions'

export class App extends Component {


  constructor(props) {
    super(props);
    
      this.state = {
        notes: []
      }
  }
   
  
  render() {
    const actions = bindActionCreators(noteActions, this.props.dispatch);
    return (
      <div>
         {this.props.notes.map((note, index) => (
        <p>Hello, {note.title} from {note.content}!</p>
        ))}
      </div>
    )
  }

}


const mapStateToProps = state => ({
  notes: state.notes.notes_list,
});


export default connect(
  mapStateToProps,
)(App)
