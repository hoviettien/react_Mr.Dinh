
import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "ABC",
                email: 'abc@gmail.com'
            }
        };
    }

    render() {
        return (
            <div>
               <h1>abcjscsj</h1>
            </div>
        );
    }
}

