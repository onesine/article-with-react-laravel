import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import FontAwesome from "react-fontawesome"; // Import css

class ConfirmAlert extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        confirmAlert({
            title: 'Confirmation de la suppression',
            message: this.props.message,
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => this.props.delete()
                },
                {
                    label: 'Non',
                    onClick: () => console.log("Cancel")
                }
            ]
        });
    }

    render() {
        return (
            <a href={this.props.route} onClick={this.submit} title={"Supprimer l'article"} className={"ml-1"}>
                <FontAwesome name='trash' />
            </a>
        );
    }
}

export default ConfirmAlert;