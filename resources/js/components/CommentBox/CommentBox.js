import React, { Component } from "react"
import Edit from "./Partials/Edit";
import Add from "./Partials/Add";

class CommentBox extends Component{
    constructor() {
        super();
        this.addComment = this.addComment.bind(this);
        this.editComment = this.editComment.bind(this);
    }

    addComment(comment) {
        this.props.addComment(comment);
    }

    editComment(comment) {
        this.props.onEditComment(comment);
    }

    render() {
        const { editComment } = this.props;
        return (
            <div className={"mt-5"}>
                <form>
                    { editComment !== undefined ? <Edit editComment={editComment} submitForm={this.editComment}/> : <Add addComment={this.addComment}/> }
                </form>
            </div>
        );
    }
}

export default CommentBox;