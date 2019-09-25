import React, { Component } from "react"
import "./Comment.css"
import StrHelper from "../../helpers/StrHelper";
import UserProfile from "../../assets/images/userProfile.png"
import FontAwesome from "react-fontawesome"
import ConfirmAlert from "../Alert/ConfirmAlert"

class Comment extends Component{
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        e.preventDefault();
        this.props.editComment(this.props.comment);
    }

    deleteComment() {
        this.props.deleteComment(this.props.comment);
    }

    render() {
        const { article, comment } = this.props;
        const route = `/articles/${article.slug}/comments/${comment.id}`;
        const editRoute = `/articles/${article.slug}/comments/${comment.id}/edit`;
        return (
            <div className={"row"} key={comment.id}>
                <div className="col-sm-2 col-12">
                    <div style={{textAlign: "center"}}>
                        <img width={100} height={100} src={UserProfile} alt=""/>
                        <figcaption><strong>{ StrHelper.toUpperFirstChar(comment.user.name) }</strong></figcaption>
                    </div>
                </div>
                <div className="col-sm-8 col-12">
                    <div className={"content-card mb-5"}>
                        <p>{ comment.content }</p>
                        <strong className={"text-right"}>
                            <span className={"mr-3 comment-action"}>
                                <a onClick={this.onClick} href={editRoute}><FontAwesome className={"mr-1"} name={"edit"}/></a>
                                <ConfirmAlert message={"Voulez vraiment supprimer ce commentaire?"} route={route} delete={this.deleteComment}/>
                            </span>
                            <span>
                                Ajouter { comment.created_at }
                            </span>
                        </strong>
                    </div>
                </div>
            </div>
        );
    }

}

export default Comment;