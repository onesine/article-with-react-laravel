import React, { Component } from "react"
import FontAwesome from "react-fontawesome"
import ConfirmAlert from "../Alert/ConfirmAlert"
import { Link } from "react-router-dom";
import "./Article.css";

class Article extends Component{
    constructor() {
        super();
        this.onClickEdit = this.onClickEdit.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    onClickEdit(e) {
        e.preventDefault();
        this.props.editArticle(this.props.article);
    }

    deleteArticle() {
        const { article } = this.props;
        this.props.deleteArticle(article);
    }

    render() {
        const { article } = this.props;
        const route = `/articles/${article.slug}/comments`;
        const actionRoute = `/articles/${article.slug}`;
        const message = "Voulez vous vraiment supprimer cet article?";
        return (
            <div className={"article-card offset-md-4"}>
                <div className={"article-content-img"} onClick={() => {console.log("Hello world!")}}>
                    <Link to={route}><h2>300*300</h2></Link>
                </div>
                <div className={"article-content"}>
                    <div className={"art-ctn-ti"}>
                        <h3 className={"text-primary"}>New</h3>
                        <span>{ article.title }</span>
                    </div>
                    <div className={"art-ctn-ft"}>
                        <div className="row">
                            <div className="col-4">
                                <strong>#{"< g2ek />"}</strong>
                            </div>
                            <div className="col-4 text-center">
                                <strong>
                                    <a href={actionRoute} onClick={this.onClickEdit} title={"Modifier l'article"} className={"mr-1"}><FontAwesome name='edit' /></a>
                                    <ConfirmAlert message={message} delete={this.deleteArticle} route={actionRoute}/>
                                </strong>
                            </div>
                            <div className="col-4 text-right">
                                <strong><FontAwesome name='eye' /> 250</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;