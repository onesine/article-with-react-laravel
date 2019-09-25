import React, { Component } from "react";

class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            showError: false,
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
        console.log("Add");
    }

    render() {
        const { showError, title, description } = this.state;
        const error = <p style={{color: "red"}}><strong>Tous champs doivent être frounis</strong></p>;
        return (
            <div>
                { showError ? error : "" }
                <div className={"form-group"}>
                    <input className={"form-control"} placeholder={"Titre de l'article"} type="text" value={ title } onChange={this.handleTitleChange} />
                </div>
                <div className="form-group">
                    <textarea className={"form-control"} placeholder={"Description de l'article"} value={ description } onChange={this.handleDescriptionChange} cols={"30"} rows={"5"}/>
                </div>
                <button type={"button"} className={"btn btn-primary"} onClick={this.onClick}>Ajouter</button>
            </div>
        );
    }
}

export default Add;