import React, {Component} from 'react';

import DefaultNavbar from "components/DefaultNavbar.js";

import QuestionPageHeader from "components/Headers/QuestionsPageHeader.js";

class QuestionPage extends Component {
  render() {
    return (
      <>
      <DefaultNavbar/>
      <QuestionPageHeader/>
      <div>
        <form onSubmit = {this.props.handleSubmit}>
          <input 
            type = 'text'
            name = 'newQuestion'
            value = {this.props.value}
            onChange = {this.props.handleChange}
            placeholder = "New Question"
            autoFocus 
            autoComplete = 'off'
            />
            <button type = "submit">Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default QuestionPage;

