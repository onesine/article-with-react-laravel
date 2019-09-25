import React, { Component } from 'react'
import Add from "./Partials/Add";
import Edit from "./Partials/Edit";

class ArticleBox extends Component{
    constructor() {
        super();
        this.send = this.send.bind(this);
    }

    send(article) {
        this.props.send(article);
    }

    render() {
        const { editArticle } = this.props;
        return (
            <form>
                { editArticle !== undefined ? <Edit editArticle={editArticle} send={this.send} /> : <Add/> }
            </form>
        );
    }
}

export default ArticleBox;