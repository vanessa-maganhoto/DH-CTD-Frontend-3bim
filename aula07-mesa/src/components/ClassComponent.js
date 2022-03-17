import {Component} from "react";

export default class ClassComponent extends Component {

    render() {
        return(
            <div>
                <li> {this.props.nome} {this.props.estaNaLista ? "está" : "não está"} convidado para a festa</li>
            </div>

        );
    }

}