import React, { Component } from "react"

class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleContentChange(e) {
        this.setState({content: e.target.value})
    }

    submitForm(e) {
        e.preventDefault();
        const { content } = this.state;
        this.props.addComment({content: content});
        this.setState({content: ""})
    }

    render() {
        const { content } = this.state;
        return (
            <div>
                <div className={"form-group"}>
                    <textarea className={"form-control"} cols="100" rows="5" value={content} onChange={this.handleContentChange} />
                </div>
                <button className={"btn btn-primary"} type={"button"} onClick={this.submitForm}>Commentez</button>
            </div>
        );
    }
}

export default Add;