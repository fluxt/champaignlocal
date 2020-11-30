import React, {Component} from 'react';

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";

import QuestionPage from '/views/QuestionPage.js';
import Response from '/views/ResponsePage.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            questions: [],
            loading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ question: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            loading: true,
        })
        await fetch('/addquestion/' + this.state.name, {
            method: 'GET'
        });
        this.getNames()
    }

    getQuestions() {
        fetch('/getquestions/')
        .then(response => response.json())
        .then(json => {
            this.setState({
                question: '',
                questions: json,
                loading: false
            })
        })
    }

    componentDidMount() {
        this.getNames();
    }

    render() {
        return (
            <div className = "App">
                <header className = "App-header">
                    <QuestionPage handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} value = {this.state.name}/>
                    {this.state.loading ? <h1>Loading</h1> : <Response {...this.state} />}
                </header>
            </div>
        );
    }
}

export default App;
