import React, {Component} from 'react'
import "./ArticleComment.css"
import Comments from "../../components/Comments/Comments";
import LoadingFont from "../../assets/images/Spin-1s-200px.gif"

class ArticleComments extends Component{
    constructor() {
        super();
        this.state = {
            articleComments: {},
            showArticleComments: false,
        }
    }

    componentDidMount () {
        const { slug } = this.props.match.params;
        axios.get(`/api/articles/${slug}/comments/`)
            .then(({data}) => {
                this.setState({showArticleComments: true});
                this.setState({articleComments: data})
            })
            .catch((errors) => {console.log(errors)});
    }

    render() {
        const { articleComments, showArticleComments } = this.state;
        const { article } = articleComments;
        const printArticle =  (
            <div style={{backgroundColor: "white"}}>
                <div className={"container py-4"}>
                    <h1 style={{color: "#455D73", fontWeight: "bold"}}>{ article !== undefined ? article.title : "" }</h1>
                    <h3 className={"mt-5"} style={{color: "#52687C"}}><strong>Description</strong></h3>
                    <p className={"mt-5 ct-color"}><strong>Publier il y à { article !== undefined ? article.created_at : "" }</strong></p>
                    <p className={"ct-color art-ctn"}>{ article !== undefined ? article.description : "" }</p>
                    <hr style={{color: "#ECEEF1"}}/>
                </div>
            </div>
        );

        const content = (
            <div>
                { article !== undefined ? printArticle : "" }
                <br/> <br/>
                { articleComments !== undefined ? <Comments comments={articleComments}/> : <Comments comments={[]}/> }
            </div>
        );

        return (
            <div>
                { !showArticleComments ? (<h3 style={{textAlign: "center"}}><img src={LoadingFont}/></h3>) : content }
            </div>
        );
    }
}

export default ArticleComments;