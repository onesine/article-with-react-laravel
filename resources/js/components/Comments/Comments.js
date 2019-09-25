import React, { Component } from "react"
import "./Comments.css"
import Comment from "../Comment/Comment";
import CommentBox from "../CommentBox/CommentBox";

class Comments extends Component{
    constructor() {
        super();
        this.state = {
            comments: {},
            editComment: undefined,
        };
        this.deleteComment = this.deleteComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.onEditComment = this.onEditComment.bind(this);
    }

    UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
        const { comments } = nextProps;
        this.setState(  {comments: comments});
    }

    addComment(comment) {
        axios.post(`/api/articles/${this.state.comments.article.slug}/comments`, comment)
            .then(({data}) => {
                var { comments } = this.state;
                comments.data = [...comments.data, data.data];
                comments.article.numberComments +=1;
                this.setState({comments});
            })
            .catch(({errors}) => {
                console.log(errors)
            });
    }

    deleteComment(comment) {
        const route = `/api/articles/${this.state.comments.article.slug}/comments/${comment.id}`;
        axios.delete(route)
            .then(({data}) => { document.location.reload() })
            .catch(({error}) => { console.log(error) });
    }

    onEditComment(comment) {
        const { comments } = this.state;
        const route = `/api/articles/${comments.article.slug}/comments/${comment.id}`;
        axios.put(route, {content: comment.content})
            .then(({data}) => (document.location.reload()))
            .catch(({error}) => (console.log(error)));
    }

    editComment(editComment) {
        this.setState({editComment: editComment});
    }

    render() {
        const { comments, editComment } = this.state;
        const printComment = (comment) => (<Comment editComment={this.editComment} deleteComment={this.deleteComment} key={comment.id} article={comments.article} comment={comment}/>);
        return (
            <div className={"container py-4"}>
                <h3 className={"cmt-title mb-5"}>{ comments.article !== undefined ? comments.article.numberComments : "" } Commentaire(s)</h3>
                { comments.data !== undefined ? comments.data.map(printComment) : "" }
                <CommentBox addComment={this.addComment} editComment={editComment} onEditComment={this.onEditComment} />
            </div>
        );
    }
}

export default Comments;