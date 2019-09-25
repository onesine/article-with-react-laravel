import React, { Component } from 'react'
import Article from "../Article/Article";
import LoadingFont from "../../assets/images/Spin-1s-200px.gif"
import "./Articles.css"
import ArticleBox from "../ArticleBox/ArticleBox";

class Articles extends Component{
    constructor(props)  {
        super(props);
        this.state = {
            articles: [],
            showArticles: false,
            editArticle: undefined,
        };
        this.addArticle = this.addArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        axios.get('api/articles')
            .then( ( {data} ) => {
                this.setState({showArticles: true});
                this.setState( {articles: data.data} )
            } )
            .catch( ( {errors} ) => ( console.log(errors) ) );
    }

    addArticle(article) {
        var { articles } = this.state;
        axios.post('api/articles', article)
            .then( ({data}) => {
                articles = [data.data, ...articles];
                this.setState( {articles} )
            } )
            .catch( ({erros}) => (console.log(erros)) );
    }

    deleteArticle(article) {
        const route = `api/articles/${article.slug}`;
        axios.delete(route)
            .then(({data}) => { document.location.reload() })
            .catch(({errors}) => { console.log(errors) });
    }

    editArticle(editArticle) {
        this.setState({ editArticle });
    }

    update(article) {
        const route = `api/articles/${article.slug}`;
        axios.put(route, article)
            .then(({data}) => (
                document.location.reload()
            ))
            .catch(({error}) => (
                console.log("Error")
            ));
    }

    render() {
        const { articles, showArticles, editArticle } = this.state;
        const content = (
            <div>
                <h1 className={"articles-title"}>Articles</h1>
                <div className={"row"}>
                    {
                        articles.map( (article) =>
                            (
                                <Article
                                    editArticle={this.editArticle}
                                    deleteArticle={this.deleteArticle}
                                    article={article}
                                    key={article.id}
                                />
                            )
                        )
                    }
                </div>
                <ArticleBox editArticle={editArticle} addArticle={this.addArticle} send={this.update} />
            </div>
        );

        return (
            <div className={"container py-4"}>
                { !showArticles ? (<h3 style={{textAlign: "center"}}><img src={LoadingFont} alt=""/></h3>) : content }
            </div>
        );
    }
}

export default Articles;