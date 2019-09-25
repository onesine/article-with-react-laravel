import React, { Component } from "react"

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        const { editComment } = nextProps;
        if (editComment !== undefined)
            this.setState({content: editComment.content});
    }

    handleContentChange(e) {
        this.setState({content: e.target.value})
    }

    submitForm(e) {
        e.preventDefault();
        const { content } = this.state;
        const { id } = this.props.editComment;
        this.props.submitForm({id: id, content: content});
        this.setState({content: ""})
    }

    render() {
        const { content } = this.state;
        return (
            <div>
                <div className={"form-group"}>
                    <textarea className={"form-control"} cols="100" rows="5" value={content} onChange={this.handleContentChange} />
                </div>
                <button className={"btn btn-primary"} type={"button"} onClick={this.submitForm}>Modifier le commentaire</button>
            </div>
        );
    }
}

export default Edit;