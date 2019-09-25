import React, { Component } from "react";

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            slug: "",
            title: "",
            description: "",
            showError: false,
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
        const { editArticle } = nextProps;
        this.setState(  {title: editArticle.title});
        this.setState(  {description: editArticle.description});
        this.setState({slug: editArticle.slug})
    }

    handleTitleChange(e) {
        this.setState( { title: e.target.value }  );
    }

    handleDescriptionChange(e) {
        this.setState( { description: e.target.value }  );
    }

    validate() {
        const { title, description } = this.state;
        if ( !title.length ) {
            this.setState( { showError: true } );
            return false;
        }
        else if ( !description.length ){
            this.setState( { showError: true } );
            return false;
        }
        return true;
    }

    onClick() {
        this.props.send({title: this.state.title, description: this.state.description, slug: this.state.slug});
    }

    render() {
        const { showError, title, description } = this.state;
        const error = <p style={{color: "red"}}><strong>Tous champs doivent être frounis</strong></p>;
        return (
            <div>
                { showError ? error : "" }
                <div className={"form-group"}>
                    <input
                        className={"form-control"}
                        placeholder={"Titre de l'article"}
                        type="text" value={title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className={"form-control"}
                        placeholder={"Description de l'article"}
                        value={description}
                        onChange={this.handleDescriptionChange}
                        cols={"30"}
                        rows={"5"}
                    />
                </div>
                <button type={"button"} className={"btn btn-primary"} onClick={this.onClick}>Modifier</button>
            </div>
        );
    }
}

export default Edit;